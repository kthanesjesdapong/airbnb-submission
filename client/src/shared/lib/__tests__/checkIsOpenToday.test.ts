import { checkIfOpenToday } from "..";

describe('checkIsOpenToday', () => {
  it('Given an array of hours and days, it should return false when the day is not included', () => {
    const result = checkIfOpenToday([[0, '0800', '0900']], 1);
    expect(result).toBe(-1);
  });
  it('Given an array of hours and days, it should return true when the day is not included', () => {
    const result = checkIfOpenToday([[0, '0800', '0900'], [1, '0800', '0900'], [2, '0800', '0900'], [3, '0800', '0900'], [3, '0800', '0900']], 1);
    expect(result).toBe(1);
  });
});