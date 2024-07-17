import { useMemo } from 'react'

const DOTS = '...'

type Props = {
  currentPage: number
  siblingCount: number
  totalPageCount: number
}

const createRangeArray = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}
//www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

export const usePagination = ({
  currentPage,
  siblingCount = 1,
  totalPageCount,
}: Props): ('...' | number)[] => {
  return useMemo(() => {
    const maxPagesCount: number = siblingCount + 5

    if (maxPagesCount >= totalPageCount) {
      return createRangeArray(1, totalPageCount)
    }

    const leftSiblingIndex = currentPage - siblingCount <= 1 ? 1 : currentPage - siblingCount
    const rightSiblingIndex =
      currentPage + siblingCount >= totalPageCount ? totalPageCount : currentPage + siblingCount

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const rightLimitValue = 3 + 2 * siblingCount
      const array = createRangeArray(1, rightLimitValue)

      return [...array, DOTS, totalPageCount]
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const leftLimitValue = totalPageCount - 3 - 2 * siblingCount + 1
      const array = createRangeArray(leftLimitValue, totalPageCount)

      return [1, DOTS, ...array]
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleArray = createRangeArray(leftSiblingIndex, rightSiblingIndex)

      return [1, DOTS, ...middleArray, DOTS, totalPageCount]
    }

    return createRangeArray(1, totalPageCount)
  }, [totalPageCount, currentPage, siblingCount])
}
