import { useState } from 'react';

export const useNavigatePages = (upperBounds: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateNext = () => {
    if (currentIndex === upperBounds - 1) setCurrentIndex(0);
    else setCurrentIndex((prev) => prev += 1);
  };
  const navigatePrev = () => {
    if (currentIndex === 0) setCurrentIndex(upperBounds - 1);
    else setCurrentIndex((prev) => prev -= 1);
  };

  return { currentIndex, setCurrentIndex, navigateNext, navigatePrev };
};