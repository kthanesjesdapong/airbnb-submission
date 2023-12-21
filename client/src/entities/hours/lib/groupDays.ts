import { HoursArr, HourArr } from "@entities/business";

type GroupMap = {
  [index: string]: (number | string)[][];
};

export const groupDaysIntoMap = (hoursArr: HoursArr) => {
  const groupMap: GroupMap = {};

  hoursArr.forEach((hourArr) => {
    if (groupMap[(hourArr[0] as string)] === undefined) {
      groupMap[hourArr[0]] = [];
    }
    groupMap[hourArr[0]].push(hourArr);

  });
  return groupMap;
};


export const checkThisHourArray = (hourAndDay: HourArr, currentTime: string, currentDay: number): boolean => {

  if (hourAndDay.indexOf(currentDay) === -1) return false;

  const currentTimeNum = parseInt(currentTime);
  const businessStartTimeNum = parseInt(hourAndDay[1] as string);
  const businessEndTimeStr = hourAndDay[2];
  const businessEndTimeNum = parseInt(hourAndDay[2] as string);

  if (currentTimeNum >= businessStartTimeNum && currentTimeNum < businessEndTimeNum || currentTimeNum >= businessStartTimeNum && currentTimeNum > businessEndTimeNum && (businessEndTimeStr as string).length > 1 && '0'.includes((businessEndTimeStr as string)[0]) && '01234'.includes((businessEndTimeStr as string)[1])) {
    return true;
  }
  return false;
};
