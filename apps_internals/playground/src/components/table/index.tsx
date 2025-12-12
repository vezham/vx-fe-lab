import React from 'react'

import { forwardRef } from '@vezham/react-utils'
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table as HeroTable,
  Selection,
  SortDescriptor,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User
} from '@vezham/react/v2'

import { DeleteIcon, EditIcon, EyeIcon, VerticalDotsIcon } from './icons'
import { TableBottom } from './tableBottom'
import { TableTop } from './tableTop'
import { DataItem, Props, useProps } from './types'

const TableComponent = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getWrapperProps,
    getTableProps,
    getPaginationProps,
    getSelectedCountProps,
    getSearchInputProps,
    getHeaderProps,
    getSubHeadProps,

    // Props
    columns,
    data,
    statusOptions,
    statusColorMap,
    actions,
    maxVisibleActions,
    pagination,
    initialSortDescriptor = { column: 'id', direction: 'ascending' },
    initialVisibleColumns,
    initialStatusFilter = 'all',

    // Callbacks
    onSelectionChange,
    onSortChange,
    onStatusFilterChange,
    onVisibleColumnsChange,
    onRowAction,
    onSearchChange,

    // Custom renderers
    renderCell,
    renderTopContent,
    renderBottomContent,

    icons = {}
  } = useProps({
    ...props,
    ref
  })

  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]))
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    initialVisibleColumns
      ? new Set(initialVisibleColumns)
      : new Set(columns.map(c => c.uid))
  )
  const [statusFilter, setStatusFilter] =
    React.useState<Selection>(initialStatusFilter)
  const [rowsPerPage, setRowsPerPage] = React.useState(
    pagination.rowsPerPage || 10
  )
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>(
    initialSortDescriptor
  )
  const [page, setPage] = React.useState(1)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns
    return columns.filter(column =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns, columns])

  const filteredItems = React.useMemo(() => {
    let filteredData = [...data]

    if (filterValue) {
      filteredData = filteredData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(filterValue.toLowerCase())
        )
      )
    }

    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredData = filteredData.filter(item =>
        Array.from(statusFilter).includes(item.status)
      )
    }

    return filteredData
  }, [data, filterValue, statusFilter, statusOptions])

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof DataItem]
      const second = b[sortDescriptor.column as keyof DataItem]

      if (first == null || second == null) return 0

      const cmp = String(first).localeCompare(String(second))
      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, filteredItems])

  const paginatedItems = React.useMemo(() => {
    if (!pagination.showPagination) return sortedItems

    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return sortedItems.slice(start, end)
  }, [sortedItems, page, rowsPerPage, pagination.showPagination])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)
  const hasSearchFilter = Boolean(filterValue)

  // Handlers
  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys)
    onSelectionChange?.(keys)
  }

  const handleSortChange = (descriptor: SortDescriptor) => {
    setSortDescriptor(descriptor)
    onSortChange?.(descriptor)
  }

  const handleStatusFilterChange = (filter: Selection) => {
    setStatusFilter(filter)
    setPage(1)
    onStatusFilterChange?.(filter)
  }

  const handleVisibleColumnsChange = (columns: Selection) => {
    setVisibleColumns(columns)
    onVisibleColumnsChange?.(columns)
  }

  const handleSearchChange = (value: string) => {
    setFilterValue(value)
    setPage(1)
    onSearchChange?.(value)
  }

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }

  const handleActionClick = (
    actionKey: string,
    item: DataItem,
    e?: React.MouseEvent
  ) => {
    e?.stopPropagation()
    onRowAction?.(actionKey, item)

    const action = actions.find(a => a.key === actionKey)
    if (action?.onClick) {
      action.onClick(item)
    }
  }

  const defaultRenderCell = React.useCallback(
    (item: DataItem, columnKey: string) => {
      const cellValue = item[columnKey]

      switch (columnKey) {
        case 'name':
          return (
            <User
              avatarProps={{ radius: 'lg', src: item.avatar }}
              description={item.email}
              name={cellValue}>
              {item.email}
            </User>
          )

        case 'role':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-default-400 text-sm capitalize">
                {item.team}
              </p>
            </div>
          )

        case 'status':
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[item.status] || 'default'}
              size="sm"
              variant="flat">
              {cellValue}
            </Chip>
          )

        case 'actions': {
          const visibleActions = actions.filter(a => !a.showInMore)
          const moreActions = actions.filter(a => a.showInMore)

          return (
            <div className="relative flex items-center justify-center gap-2">
              {visibleActions.slice(0, maxVisibleActions).map(action => {
                const Icon = action.icon || getDefaultIcon(action.key)
                return (
                  <Tooltip key={action.key} content={action.label}>
                    <span
                      className={`cursor-pointer text-lg active:opacity-50 ${
                        action.color === 'danger'
                          ? 'text-danger'
                          : 'text-default-400'
                      }`}
                      onClick={e => handleActionClick(action.key, item, e)}>
                      <Icon />
                    </span>
                  </Tooltip>
                )
              })}

              {(visibleActions.length > maxVisibleActions ||
                moreActions.length > 0) && (
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly size="sm" variant="light">
                      <VerticalDotsIcon className="text-default-400" />
                    </Button>
                  </DropdownTrigger>

                  <DropdownMenu>
                    <>
                      {visibleActions.slice(maxVisibleActions).map(action => (
                        <DropdownItem
                          key={action.key}
                          onClick={() => handleActionClick(action.key, item)}
                          className={
                            action.color === 'danger' ? 'text-danger' : ''
                          }>
                          {action.label}
                        </DropdownItem>
                      ))}

                      {moreActions.map(action => (
                        <DropdownItem
                          key={action.key}
                          onClick={() => handleActionClick(action.key, item)}
                          className={
                            action.color === 'danger' ? 'text-danger' : ''
                          }>
                          {action.label}
                        </DropdownItem>
                      ))}
                    </>
                  </DropdownMenu>
                </Dropdown>
              )}
            </div>
          )
        }

        default:
          return cellValue
      }
    },
    [actions, maxVisibleActions, statusColorMap]
  )

  const getDefaultIcon = (key: string) => {
    switch (key) {
      case 'view':
        return icons.eye || EyeIcon
      case 'edit':
        return icons.edit || EditIcon
      case 'delete':
        return icons.delete || DeleteIcon
      default:
        return () => null
    }
  }

  // Top content props
  const topContentProps = {
    filterValue,
    setFilterValue: handleSearchChange,
    statusFilter,
    setStatusFilter: handleStatusFilterChange,
    visibleColumns,
    setVisibleColumns: handleVisibleColumnsChange,
    statusOptions,
    columns,
    rowsPerPage,
    handleRowsPerPageChange,
    filteredItems,
    pagination,
    getWrapperProps,
    getHeaderProps,
    getSearchInputProps,
    getSubHeadProps,
    renderTopContent
  }

  // Bottom content props
  const bottomContentProps = {
    selectedKeys,
    paginatedItems,
    page,
    pages,
    hasSearchFilter,
    setPage,
    pagination,
    getPaginationProps,
    getSelectedCountProps,
    renderBottomContent
  }

  return (
    <div {...getBaseProps()}>
      <div {...getWrapperProps()}>
        <HeroTable
          aria-label="Data table"
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={<TableTop {...topContentProps} />}
          topContentPlacement="outside"
          bottomContent={<TableBottom {...bottomContentProps} />}
          bottomContentPlacement="outside"
          onSelectionChange={handleSelectionChange}
          onSortChange={handleSortChange}
          {...getTableProps()}>
          <TableHeader columns={headerColumns}>
            {column => (
              <TableColumn
                key={column.uid}
                align={
                  column.align ||
                  (column.uid === 'actions' ? 'center' : 'start')
                }
                allowsSorting={column.sortable}
                width={column.width}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent="No data found" items={paginatedItems}>
            {item => (
              <TableRow key={item.id}>
                {columnKey => (
                  <TableCell>
                    {renderCell
                      ? renderCell(item, columnKey as string)
                      : defaultRenderCell(item, columnKey as string)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </HeroTable>
      </div>
    </div>
  )
})

TableComponent.displayName = 'Table'

export { TableComponent as Table }
