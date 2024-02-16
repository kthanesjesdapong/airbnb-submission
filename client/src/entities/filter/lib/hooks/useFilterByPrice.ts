import { useState } from 'react';

export const useFilterByPrice = () => {
  const [prices, setPrices] = useState<string[]>([]);
  const handlePriceChange = (selectedPrice: string[]) => {
    setPrices(selectedPrice);
  };

  return { prices, handlePriceChange };
};
