export const findLimit = (n: number): [number, number] | null => {
  let highestFactorPair: [number, number] | null = null;

  for (let i = 1; i <= n / 2; i++) {
    if (n % 2) {
      const correspondingFactor = n / i;
      if (i < 50 && correspondingFactor < 50) {
        highestFactorPair = [i, correspondingFactor];
      }
    }
  }
  return highestFactorPair;
};

