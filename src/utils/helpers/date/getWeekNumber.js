export const getWeekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysYear = (date.getTime() - firstDayOfYear) / 86400000;

  return Math.ceil((pastDaysYear + firstDayOfYear.getDay() + 1) / 7);
};
