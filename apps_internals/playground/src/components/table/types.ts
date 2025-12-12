// table/types.ts
import { JSX, SVGProps } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'
import { ChipProps, Selection, SortDescriptor } from '@vezham/react/v2'

import { tvProps, tvSlots, tva } from './variant'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

type Column = {
  uid: string
  name: string
  sortable?: boolean
  align?: 'start' | 'center' | 'end'
  width?: string | number
}

type StatusOption = {
  uid: string
  name: string
}

type DataItem = {
  [key: string]: any
  id: string | number
}

type Action = {
  key: string
  label: string
  icon?: (props: IconSvgProps) => JSX.Element
  color?: ChipProps['color']
  onClick?: (item: DataItem) => void
  showInMore?: boolean
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  columns: Column[]
  data: DataItem[]
  statusOptions?: StatusOption[]
  statusColorMap?: Record<string, ChipProps['color']>

  actions?: Action[]
  maxVisibleActions?: number

  pagination?: {
    rowsPerPage?: number
    rowsPerPageOptions?: number[]
    showPagination?: boolean
    showRowsPerPage?: boolean
    showSelectedCount?: boolean
  }

  initialSortDescriptor?: SortDescriptor
  initialVisibleColumns?: string[]
  initialStatusFilter?: Selection

  onSelectionChange?: (keys: Selection) => void
  onSortChange?: (descriptor: SortDescriptor) => void
  onStatusFilterChange?: (filter: Selection) => void
  onVisibleColumnsChange?: (columns: Selection) => void
  onRowAction?: (actionKey: string, item: DataItem) => void
  onAddNew?: () => void
  onSearchChange?: (value: string) => void

  renderCell?: (item: DataItem, columnKey: string) => React.ReactNode
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    columns,
    data,
    statusOptions = [],
    statusColorMap = {},
    actions = [],
    maxVisibleActions = 3,
    pagination = {
      rowsPerPage: 10,
      rowsPerPageOptions: [5, 10, 15],
      showPagination: true,
      showRowsPerPage: true,
      showSelectedCount: true
    },
    initialSortDescriptor,
    initialVisibleColumns,
    initialStatusFilter,
    onSelectionChange,
    onSortChange,
    onStatusFilterChange,
    onVisibleColumnsChange,
    onRowAction,
    onAddNew,
    onSearchChange,
    renderCell,
    renderTopContent,
    renderBottomContent,
    icons,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getSearchInputProps: PropGetter = () => ({
    className: slots.searchInput({ class: classNames?.searchInput })
  })

  const getTableProps: PropGetter = () => ({
    className: slots.table({ class: classNames?.table })
  })

  const getSubHeadProps: PropGetter = () => ({
    className: slots.subhead({ class: classNames?.subhead })
  })

  const getPaginationProps: PropGetter = () => ({
    className: slots.pagination({ class: classNames?.pagination })
  })

  const getSelectedCountProps: PropGetter = () => ({
    className: slots.selectedCount({ class: classNames?.selectedCount })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,
    getHeaderProps,
    getSearchInputProps,
    getTableProps,

    getSubHeadProps,
    getPaginationProps,
    getSelectedCountProps,

    // Props to pass through
    columns,
    data,
    statusOptions,
    statusColorMap,
    actions,
    maxVisibleActions,
    pagination,
    initialSortDescriptor,
    initialVisibleColumns,
    initialStatusFilter,
    onSelectionChange,
    onSortChange,
    onStatusFilterChange,
    onVisibleColumnsChange,
    onRowAction,
    onAddNew,
    onSearchChange,
    renderCell,
    renderTopContent,
    renderBottomContent,
    icons,

    ...otherProps
  }
}

export { useProps }
export type { Props }
export type { DataItem, Column, StatusOption, Action }
