import { useState, ChangeEventHandler } from 'react';

export const useFilterByRating = () => {
  const [rating, setRating] = useState<number>(0);
  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = event => {

    const numTargetValue = Number(event.currentTarget.value);

    if (numTargetValue > 5) {
      return;
    }
    else {

      setRating(numTargetValue);

    }
  };
  return { rating, handleRatingChange };
};