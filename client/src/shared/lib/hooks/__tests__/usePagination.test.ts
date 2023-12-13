import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { usePagination, usePaginationProps } from '..';

type usePaginateValsType = usePaginationProps;

describe(('usePagination'), () => {
  let usePaginateVals: usePaginateValsType;
  beforeEach(() => {
    usePaginateVals = {
      totalCount: 0,
      currentPage: 0,
      pageSize: 0
    };
  });

  it('the totalPages should be the result of totalCount / pageSize Rounded Up', () => {
    usePaginateVals = {
      totalCount: 65,
      currentPage: 1,
      pageSize: 10
    };
    const { result } = renderHook(() => usePagination(usePaginateVals));
    if (result && result.current) {
      expect(result.current[result.current.length - 1]).toBe(7);
      expect(result.current[result.current.length - 1]).not.toBe(6);
    }
  });
  it('should return 1 - to currentPage value if the currentPage >= totalPageNumberCount', () => {
    usePaginateVals = {
      totalCount: 15,
      currentPage: 3,
      pageSize: 6,
    };
    const { result } = renderHook(() => usePagination(usePaginateVals));
    if (result && result.current) {
      expect(result.current[usePaginateVals.currentPage - 1]).toBe(3);
    }
  });
  it('should return leftRange and right DOTs when there is no there are no left dots to be shown', () => {
    usePaginateVals = {
      totalCount: 40,
      currentPage: 1,
      pageSize: 6,
    };
    const { result } = renderHook(() => usePagination(usePaginateVals));
    if (result && result.current) {
      expect(result.current[result.current.length - 3]).not.toBe(7);
      expect(result.current[result.current.length - 2]).toBe('...');
    }
  });
  it('should return rightRight and leftDots when there are no right dots to be shown', () => {
    usePaginateVals = {
      totalCount: 45,
      currentPage: 6,
      pageSize: 7
    };
    const { result } = renderHook(() => usePagination(usePaginateVals));
    if (result && result.current) {
      expect(result.current[1]).toBe('...');
      expect(result.current[7 - 2]).toBe(6);
    }
  });

  it('should return both RANGES and both DOTS when both totalPage !== currentPage and currentPage is > 2 AND < totalPageCount - 2 ', () => {
    usePaginateVals = {
      totalCount: 70,
      currentPage: 4,
      pageSize: 7
    };
    const { result } = renderHook(() => usePagination(usePaginateVals));
    if (result && result.current) {
      expect(result.current[1]).toBe('...');
      expect(result.current[0]).toBe(1);
      expect(result.current[usePaginateVals.pageSize - 2]).toBe('...');
      expect(result.current[usePaginateVals.pageSize - 3]).toBe(5);
    }
  });
});


