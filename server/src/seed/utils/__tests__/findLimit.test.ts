import { findLimit } from "../findLimit";

describe('findLimit, finds the highest factor below 50 and its complementary number', () => {

  it('given n= 60 it should return 30 AND 2', () => {
    const n = 60;
    const pairOfLimitAndOffSet = findLimit(n);
    const [highestFactor, complement] = pairOfLimitAndOffSet;
    expect(highestFactor).toBe(30);
    expect(complement).toBe(2);
  });

  it('given n= 180 it should return 45 AND 4', () => {
    const n = 180;
    const pairOfLimitAndOffSet = findLimit(n);
    const [highestFactor, complement] = pairOfLimitAndOffSet;
    expect(highestFactor).toBe(45);
    expect(complement).toBe(4);
  });

  it('given n = 95 it should return 19 AND 5', () => {
    const n = 60;
    const pairOfLimitAndOffSet = findLimit(n);
    const [highestFactor, complement] = pairOfLimitAndOffSet;
    expect(highestFactor).toBe(30);
    expect(complement).toBe(2);
  });

  it('if given a number below 50 it will return 50 AND 1', () => {
    const n = 50;
    const pairOfLimitAndOffSet = findLimit(n);
    const [highestFactor, complement] = pairOfLimitAndOffSet;
    expect(highestFactor).toBe(50);
    expect(complement).toBe(1);
  });

  it('if given a prime number above 50 it will return 50 and res of n/50 rounded up', () => {
    const n = 997;
    const pairOfLimitAndOffSet = findLimit(n);
    const [highestFactor, complement] = pairOfLimitAndOffSet;
    expect(highestFactor).toBe(50);
    expect(complement).toBe(20);
  });

});