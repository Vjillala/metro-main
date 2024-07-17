import React, { useCallback, useMemo } from 'react'

import ArrowBackOutline from '@/assets/icons/ArrowBackOutline'
import ArrowForwardOutline from '@/assets/icons/ArrowForwardOutline'
import { PageSizeSelect } from '@/components/ui/Pagination/PageSizeSelect/PageSizeSelect'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  itemsPerPage: number
  onItemsPerPageChange: (size: number) => void
  onPageChange: (page: number) => void
  siblingCount?: number
  totalItems: number
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  onItemsPerPageChange,
  onPageChange,
  siblingCount = 1,
  totalItems,
}) => {
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage])
  const paginationItems = useMemo(
    () => usePagination({ currentPage, siblingCount, totalPageCount: totalPages }),
    [currentPage, siblingCount, totalPages]
  )
  const classNames = {
    container: s.container,
    dots: s.dots,
    nextButtonClass: clsx(s.button, currentPage === totalPages && s.disabled),
    pagination: s.pagination,
    prevButtonClass: clsx(s.button, currentPage === 1 && s.disabled),
    selectBlock: s.selectBlock,
  }

  const isPrevButtonDisabled = currentPage === 1
  const isNextButtonDisabled = currentPage === totalPages

  const handlePrevPageChange = useCallback(() => {
    onPageChange(currentPage - 1)
  }, [currentPage, onPageChange])

  const handleNextPageChange = useCallback(() => {
    onPageChange(currentPage + 1)
  }, [currentPage, onPageChange])

  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange(page)
    },
    [onPageChange]
  )

  const renderPaginationButton = useCallback(
    (item: number) => {
      const buttonClassName = clsx(s.button, { [s.active]: currentPage === item })

      return (
        <button className={buttonClassName} key={item} onClick={() => handlePageChange(item)}>
          {item}
        </button>
      )
    },
    [currentPage, handlePageChange]
  )

  return (
    <div className={classNames.container}>
      <div className={classNames.pagination}>
        <button
          className={classNames.prevButtonClass}
          disabled={isPrevButtonDisabled}
          onClick={handlePrevPageChange}
        >
          <ArrowBackOutline />
        </button>
        {paginationItems.map((item, index) =>
          typeof item === 'number' ? (
            renderPaginationButton(item)
          ) : (
            <Typography
              as={'span'}
              className={classNames.dots}
              key={'dots' + index}
              variant={'body2'}
            >
              {'...'}
            </Typography>
          )
        )}
        <button
          className={classNames.nextButtonClass}
          disabled={isNextButtonDisabled}
          onClick={handleNextPageChange}
        >
          <ArrowForwardOutline />
        </button>
      </div>
      <div className={classNames.selectBlock}>
        <Typography variant={'body2'}>Показать</Typography>
        <PageSizeSelect onPageSizeChange={onItemsPerPageChange} pageSize={itemsPerPage} />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
