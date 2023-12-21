const appendTimeSuffix = (time: number): string => (time < 1200) ? ' a.m' : ' p.m';

const formatTime = (timeStr: string): string => {

  if (timeStr === '0000') {
    return '12:00';
  }

  const timeNum = parseInt(timeStr);
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

  const startTimeFormatted = formatTime(startTimeStr) + appendTimeSuffix(startTimeNum);
  const endTimeFormatted = formatTime(endTimeStr) + appendTimeSuffix(endTimeNum);

  if (startTimeFormatted === '12:00 a.m' && endTimeFormatted === '12:00 a.m') {
    return 'Open 24 Hours';
  }

  return `${startTimeFormatted} - ${endTimeFormatted}`;
};

