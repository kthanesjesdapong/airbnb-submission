const appendTimeSuffx = (time: number): string => {
  if (time < 1200) {
    return ' a.m';
  } else {
    return ' p.m';
  }
};


const formatTime = (timeStr: string): string => {

  const timeNum = parseInt(timeStr);
  if (timeStr === '0000') {
    return '12:00';
  }
  if (timeNum >= 1259) {
    timeStr = String(timeNum - 1200);
  }
  if (timeStr.length < 4) {
    timeStr = timeStr.slice(0, 1) + ':' + timeStr.slice(1, 3);
  }
  else if (timeNum < 1000) {
    timeStr = timeStr.slice(1, 2) + ':' + timeStr.slice(2, 4);
  } else {
    timeStr = timeStr.slice(0, 2) + ':' + timeStr.slice(2, 4);
  }

  return timeStr;
};


export const formatHours = (startTimeStr: string, endTimeStr: string): string => {

  const startTimeNum = parseInt(startTimeStr);
  const endTimeNum = parseInt(endTimeStr);

  startTimeStr = formatTime(startTimeStr);
  endTimeStr = formatTime(endTimeStr);

  startTimeStr += appendTimeSuffx(startTimeNum);
  endTimeStr += appendTimeSuffx(endTimeNum);

  if (startTimeStr === '12:00 a.m' && endTimeStr === '12:00 a.m') {
    return 'Open 24 Hours';
  }

  return `${startTimeStr} - ${endTimeStr}`;
};