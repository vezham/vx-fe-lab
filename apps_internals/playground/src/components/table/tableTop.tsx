import React from 'react'

import { Selection } from '@vezham/react/v2'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input
} from '@vezham/react/v2'

import { ChevronDownIcon, SearchIcon } from './icons'
import { Column, StatusOption } from './types'

interface TableTopProps {
  filterValue: string
  setFilterValue: (value: string) => void
  statusFilter: Selection
  setStatusFilter: (filter: Selection) => void
  visibleColumns: Selection
  setVisibleColumns: (columns: Selection) => void
  statusOptions: StatusOption[]
  columns: Column[]
  rowsPerPage: number
  handleRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  filteredItems: any[]
  pagination: {
    showRowsPerPage?: boolean
    rowsPerPageOptions?: number[]
  }
  getWrapperProps: () => any
  getHeaderProps: () => any
  getSearchInputProps: () => any
  getSubHeadProps: () => any
  renderTopContent?: (props: {
    filterValue: string
    setFilterValue: (value: string) => void
    statusFilter: Selection
    setStatusFilter: (filter: Selection) => void
    visibleColumns: Selection
    setVisibleColumns: (columns: Selection) => void
  }) => React.ReactNode
}

const TableTop: React.FC<TableTopProps> = ({
  filterValue,
  setFilterValue,
  statusFilter,
  setStatusFilter,
  visibleColumns,
  setVisibleColumns,
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
}) => {
  if (renderTopContent) {
    return renderTopContent({
      filterValue,
      setFilterValue,
      statusFilter,
      setStatusFilter,
      visibleColumns,
      setVisibleColumns
    })
  }

  const handleSearchChange = (value: string) => {
    setFilterValue(value)
  }

  return (
    <div {...getWrapperProps()}>
      <div {...getHeaderProps()}>
        <Input
          isClearable
          {...getSearchInputProps()}
          placeholder="Search..."
          size="sm"
          startContent={<SearchIcon className="text-default-300" />}
          value={filterValue}
          variant="bordered"
          onClear={() => setFilterValue('')}
          onValueChange={handleSearchChange}
        />
        <div className="flex gap-3">
          {statusOptions.length > 0 && (
            <Dropdown>
              <DropdownTrigger className="flex w-full">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat">
                  Filter
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}>
                {statusOptions.map(status => (
                  <DropdownItem key={status.uid}>{status.name}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )}
          <Dropdown>
            <DropdownTrigger className="flex w-full">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                size="sm"
                variant="flat">
                Sort
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}>
              {columns.map(column => (
                <DropdownItem key={column.uid}>{column.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div {...getSubHeadProps()}>
        <span className="text-default-400 text-small">
          Total {filteredItems.length} items
        </span>
        {pagination.showRowsPerPage && (
          <label className="text-default-400 text-small flex items-center">
            Rows per page:
            <select
              className="text-default-400 text-small ml-1 bg-transparent outline-none"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}>
              {(pagination.rowsPerPageOptions || [5, 10, 15]).map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  )
}

export { TableTop }
