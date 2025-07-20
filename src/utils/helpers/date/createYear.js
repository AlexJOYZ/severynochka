import { createDate } from './createDate';
import { createMonth } from './createMonth';

export const createYear = (params) => {
  const locale = params?.locale ?? 'default';

  const monthCount = 12;

  const today = createDate();
  const year = params?.year ?? today.year;
  const monthNumber = params?.monthNumber ?? today.monthNumber;

  const month = createMonth({ date: new Date(year, monthNumber - 1), locale });

  const getMonthDays = (monthIndex) =>
    createMonth({ date: new Date(year, monthIndex), locale }).createMonthDays();

  const createYearMonths = () => {
    const months = [];
    for (let i = 0; i < monthCount; i++) {
      months[i] = getMonthDays(i);
    }
    return months;
  };

  return {
    createYearMonths,
    month,
    year,
  };
};
