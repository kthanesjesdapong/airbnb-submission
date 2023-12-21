const appendTimeSuffix = (time: number): string => (time < 1200) ? ' a.m' : ' p.m';

const formatTime = (timeStr: string): string => {
  const timeNum = parseInt(timeStr);

  if (timeStr === '0000') {
    return '12:00';
  }

  if (timeNum >= 1200) {
    timeStr = String(timeNum - 1200);
  }

  const formattedTime = (timeStr.length === 3) ? '0' + timeStr : timeStr;

  return `${formattedTime.slice(0, 2)}:${formattedTime.slice(2, 4)}`;
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

