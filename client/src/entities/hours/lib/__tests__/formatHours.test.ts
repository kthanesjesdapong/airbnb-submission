import { formatHours } from "@entities/hours";

describe('formatHours', () => {
  it('should return hours formatted correctly', () => {
    const res = formatHours('0700', '2300');
    expect(res).toBe('7:00 a.m - 11:00 p.m');
  });
});