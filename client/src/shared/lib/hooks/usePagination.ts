import { useMemo } from 'react';
import { range, DOTS } from '..';




type usePaginationProps = {
  totalCount: number; // total count of data available from the source
  currentPage: number; //represents the current active page. Using 1-based index instead of traditional 0-based index for our currentPage value.
  pageSize: number; // rep the max data that is visible in a single page
  siblingCount?: number; //represents the min number of page buttons to be shown on each side of currentPage defaults to 1.
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: usePaginationProps) => {
  const paginationRange = useMemo(() => {

    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    //1.num of pages < page num we want to show in pagination Component, return range[1...,totalPageCount]
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    //2.no left dots to show, but right dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    //3.no right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    //4. both left and right dots to be shown

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};