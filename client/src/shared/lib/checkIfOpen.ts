import { HourArr, HoursArr } from '@entities/business';

export const checkIfOpenToday = (hoursAndDay: HoursArr, currentDay: number): number => {
  return hoursAndDay.map(h => h[0]).indexOf(currentDay);
};


export const checkIfOpenThisHour = (hourAndDay: HourArr, currentTime: string): boolean => {

  const currentTimeNum = parseInt(currentTime);

  const businessStartTimeNum = parseInt(hourAndDay[1] as string);
  const businessEndTimeStr = hourAndDay[2];
  const businessEndTimeNum = parseInt(hourAndDay[2] as string);

  if (currentTimeNum < businessStartTimeNum || currentTimeNum >= businessEndTimeNum && (businessEndTimeStr as string).length > 1 && '0'.includes((businessEndTimeStr as string)[0]) === false && '1234'.includes((businessEndTimeStr as string)[1])) {
    return false;
  }

  return true;
};




export const checkIfOpen = (hoursAndDay: HoursArr, currentDay: number, currentTime: string): boolean | string => {

  const dayIndex = checkIfOpenToday(hoursAndDay, currentDay);

  if (hoursAndDay.length === 1 && hoursAndDay[0][1] === '0' && hoursAndDay[0][2] === '0') {
    return 'Hours Not Available';
  }

  else if (dayIndex === -1) {
    return false;
  }

  else if (!checkIfOpenThisHour(hoursAndDay[dayIndex], currentTime)) {
    return false;
  }
  else {
    return true;
  }
};

export const openIndex = (hoursAndDay: HoursArr, currentDay: number, currentTime: string): number => {

  const dayIndex = checkIfOpenToday(hoursAndDay, currentDay);


  if (hoursAndDay.length === 1 && hoursAndDay[0][1] === '0' && hoursAndDay[0][2] === '0') {
    return 0;
  }
  else if (dayIndex === -1) {
    return 0;
  }
  else if (!checkIfOpenThisHour(hoursAndDay[dayIndex], currentTime)) {
    return 0;
  }
  else {
    return dayIndex;
  }
};