import { BusinessHoursList, checkIfOpen, checkIfOpenThisHour } from '@entities/hours';


describe('checkIfOpenThisHour', () => {


  it('should return false if the currentTime is LESS than businessStartTime', () => {
    const businessHours: BusinessHoursList = [[0, '0700', '0000']];
    const res = checkIfOpenThisHour(businessHours, '0600');
    expect(res).toBe(false);
  });
  it('should return false if end time is GREATER than businessEndTime', () => {
    const businessHours: BusinessHoursList = [[1, '0700', '2300']];
    const res = checkIfOpenThisHour(businessHours, '2345');
    expect(res).toBe(false);
  });
  it('should return true if end time is greater than businessEndTime BUT businessEndTime starts with a 0', () => {
    const res = checkIfOpenThisHour([[1, '0700', '0000']], '2345');
    expect(res).toBe(true);
  });
  it('should return true if end time is greater than businessEndTime BUT businessEndTime is either 0100, 0200, 0300,0400', () => {
    const res = checkIfOpenThisHour([[1, '0700', '0100']], '2345');
    expect(res).toBe(true);
  });
});

describe('checkIfOpen', () => {
  it('should return \'Hours Not Available\' when provided with an array [0,\'0\',\'0\']', () => {
    const res = checkIfOpen([[0, '0', '0']], 0, '2300');
    expect(res).toBe('Hours Not Available');
  });
  it('should return false if the dayInput is not contained within the hours array', () => {
    const businessHours: BusinessHoursList = [[0, '0700', '0000'], [2, '0700', '2300'], [4, '0700', '2200'], [5, '0700', '2000']];
    const res = checkIfOpen(businessHours, 1, '2300');
    expect(res).toBe(false);
  });
  it('should return false if the dayInput is contained with the hoursArray but the current time exceeds the businessEnd time', () => {
    const businessHours: BusinessHoursList = [[0, '0700', '0000'], [2, '0700', '2300'], [4, '0700', '2200'], [5, '0700', '2000']];
    const res = checkIfOpen(businessHours, 1, '2300');
    expect(res).toBe(false);
  });
  it('should return true if the dayInput is contained within the hours array and currentTime does not exceed businessEndTime', () => {
    const businessHours: BusinessHoursList = [[0, '0700', '0000'], [2, '0700', '2345'], [4, '0700', '2200'], [5, '0700', '2000']];
    const res = checkIfOpen(businessHours, 2, '2300');
    expect(res).toStrictEqual([[2, '0700', '2345']]);
  });

});