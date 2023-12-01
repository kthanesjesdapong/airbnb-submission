export const findLimit = (n: number | undefined): [number, number] => {
  if (n === undefined || n <= 50) return [50, 1];
  let highestFactorPair: [number, number] | null = null;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      const correspondingFactor = n / i;
      if (i < 50 && correspondingFactor < 50) {
        highestFactorPair = [i, correspondingFactor];
      }
    }
  }
  return highestFactorPair ?? [50, Math.ceil(n / 50)];
};

//Finds the limit for results to be returned from query, the amt of times we have to call our other helperFunc