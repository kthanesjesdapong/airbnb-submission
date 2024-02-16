import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { useNavigatePages } from '..';

describe('useNavigatePages', () => {
  it('should have a default state of 0', () => {
    const { result } = renderHook(() => useNavigatePages(3));
    expect(result.current.currentIndex).toBe(0);
  });

  it('calling navigateNext should increment the state based off of the previous state', async () => {
    const { result } = renderHook(() => useNavigatePages(3));

    await waitFor(() => {
      result.current.navigateNext();
    });
    expect(result.current.currentIndex).toBe(1);
  });
  it('calling navigateNext past the upperBounds should reset the page back down to 0', async () => {
    const { result } = renderHook(() => useNavigatePages(3));

    await waitFor(() => {
      result.current.navigateNext();
    });
    await waitFor(() => {
      result.current.navigateNext();
    });
    await waitFor(() => {
      result.current.navigateNext();
    });
    expect(result.current.currentIndex).toBe(0);
  });

  it('calling navigatePrev should  decrement currentIndex by amount of times it is called', async () => {
    const { result } = renderHook(() => useNavigatePages(3));

    await waitFor(() => {
      result.current.navigateNext();
    });
    await waitFor(() => {
      result.current.navigateNext();
    });

    await waitFor(() => {
      result.current.navigatePrev();
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it('calling navigatePrev past the lowerBounds should have set the Pages to the upperBounds', async () => {
    const { result } = renderHook(() => useNavigatePages(2));

    await waitFor(() => {
      result.current.navigatePrev();
    });
    expect(result.current.currentIndex).toBe(1);
  });
});
