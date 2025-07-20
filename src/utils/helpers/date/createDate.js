import { getWeekNumber } from './getWeekNumber';

export const createDate = (params) => {
  const locale = params?.locale ?? 'default';

  const date = params?.date ?? new Date();
  const dayNumber = date.getDate();
  const day = date.toLocaleDateString(locale, { weekday: 'long' });
  const dayShort = date.toLocaleDateString(locale, { weekday: 'short' });
  const dayNumberInWeek = date.getDay() + 1;
  const year = date.getFullYear();
  const yearShort = date.toLocaleDateString(locale, { year: '2-digit' });
  const month = date.toLocaleDateString(locale, { month: 'long' });
  const monthShort = date.toLocaleDateString(locale, { month: 'short' });
  const monthNumber = date.getMonth() + 1;
  const monthIndex = date.getMonth();
  const timestamp = date.getTime();
  const week = getWeekNumber(date);

  return {
    date,
    dayNumber,
    day,
    dayShort,
    dayNumberInWeek,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};
