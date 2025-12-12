import React from 'react'

import { Selection } from '@vezham/react/v2'
import { Pagination } from '@vezham/react/v2'

import { DataItem } from './types'

interface TableBottomProps {
  selectedKeys: Selection
  paginatedItems: DataItem[]
  page: number
  pages: number
  hasSearchFilter: boolean
  setPage: (page: number) => void
  pagination: {
    showPagination?: boolean
    showSelectedCount?: boolean
  }
  getPaginationProps: () => any
  getSelectedCountProps: () => any
  renderBottomContent?: (props: {
    selectedKeys: Selection
    items: DataItem[]
    page: number
    pages: number
    hasSearchFilter: boolean
    setPage: (page: number) => void
  }) => React.ReactNode
}

const TableBottom: React.FC<TableBottomProps> = ({
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
}) => {
  if (renderBottomContent) {
    return renderBottomContent({
      selectedKeys,
      items: paginatedItems,
      page,
      pages,
      hasSearchFilter,
      setPage
    })
  }

  if (!pagination.showPagination) return null

  return (
    <div {...getPaginationProps()}>
      {pagination.showPagination && (
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background'
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      )}
      {pagination.showSelectedCount && (
        <span {...getSelectedCountProps()}>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${paginatedItems.length} selected`}
        </span>
      )}
    </div>
  )
}

export { TableBottom }
