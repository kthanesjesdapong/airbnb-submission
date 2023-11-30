import { findLimit } from "../findLimit";

describe('findLimit, finds the highest factor below 50 and its complementary number', () => {
  it('Should return 30 AND 2', () => {
    const n = 60;
    const pairOfLimitAndOffSet = findLimit(n) ?? [50, Math.floor(n)];
    const highestFactor = pairOfLimitAndOffSet[0];
    const complement = pairOfLimitAndOffSet[1];
    expect(highestFactor).toBe(30);
    expect(complement).toBe(1);
  });
});