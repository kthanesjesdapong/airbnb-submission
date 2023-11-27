import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { usePagination } from '..';
import { range } from '@shared/lib';

describe(('usePagination'), () => {
  it();
});


//Test that totalPageCount returns the correct number
//Test that if num of Page is < page number we want to show in pagination Comp, we return range[1.....,totalPageCount]
//Test 1st case where if the totalPageNumbers >= totalPageCount return range[1....,totalPageCount];
//Test 2nd case where if no LEFT dots to show, but right dots to be shown. show right dots
//Test 3rd. no rightdots to show but left dots to be shown
//Test 4th left and right dots to be shown.