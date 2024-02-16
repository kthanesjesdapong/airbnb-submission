import { HoursArr } from '@entities/business';

export const checkIfOpenToday = (
  hoursAndDay: HoursArr,
  currentDay: number
): HoursArr => {
  return hoursAndDay.filter((h) => h[0] === currentDay);
};

export const checkIfOpenThisHour = (
  hoursAndDay: HoursArr,
  currentTime: string
): boolean => {
  const currentTimeNum = parseInt(currentTime);

  for (const hourAndDay of hoursAndDay) {
    const businessStartTimeNum = parseInt(hourAndDay[1] as string);
    const businessEndTimeStr = hourAndDay[2];
    const businessEndTimeNum = parseInt(hourAndDay[2] as string);

    if (
      (currentTimeNum >= businessStartTimeNum &&
        currentTimeNum < businessEndTimeNum) ||
      (currentTimeNum >= businessStartTimeNum &&
        currentTimeNum > businessEndTimeNum &&
        (businessEndTimeStr as string).length > 1 &&
        '0'.includes((businessEndTimeStr as string)[0]) &&
        '01234'.includes((businessEndTimeStr as string)[1]))
    ) {
      return true;
    }
  }
  return false;
};

export const checkIfOpen = (
  hoursAndDay: HoursArr,
  currentDay: number,
  currentTime: string
): boolean | string | HoursArr => {
  const currentDayHoursArray = checkIfOpenToday(hoursAndDay, currentDay);
  if (
    hoursAndDay.length === 1 &&
    hoursAndDay[0][1] === '0' &&
    hoursAndDay[0][2] === '0'
  ) {
    return 'Hours Not Available';
  } else if (!currentDayHoursArray.length) {
    return false;
  } else if (!checkIfOpenThisHour(currentDayHoursArray, currentTime)) {
    return false;
  } else {
    return currentDayHoursArray;
  }
};
