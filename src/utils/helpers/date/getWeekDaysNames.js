import { createDate } from './createDate';

export const getWeekDaysNames = (firstWeekDay = 1, locale = 'default') => {
  const weekDaysNames = Array.from({ length: 7 });

  const date = new Date();

  weekDaysNames.forEach((_, i) => {
    const { day, dayShort, dayNumberInWeek } = createDate({
      locale,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDay() + i),
    });
    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort };
  });
  return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)];
};
