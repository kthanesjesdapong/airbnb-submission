export const getCurrentDateAndTime = () => {
  const dateObj = new Date();
  const day = dateObj.getDay();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const formattedMinute = minute < 10 ? '' + '0' + minute : minute;

  return {
    currentDay: day,
    currentHour: hour,
    currentMinute: formattedMinute,
    currentTime: '' + hour + formattedMinute,
  };
};
