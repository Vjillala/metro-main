import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui/Pagination/Pagination'

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const DefaultPagination = () => {
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (size: number) => {
    setPageSize(Number(size))
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={pageSize}
        onItemsPerPageChange={onChangePageSize}
        onPageChange={setCurrentPage}
        totalItems={100}
      />
      <div style={{ marginTop: '24px' }}>
        <p>Current page: {currentPage}</p>
        <p>Page size: {pageSize}</p>
      </div>
    </>
  )
}
