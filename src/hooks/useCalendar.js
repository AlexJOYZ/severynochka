import { useMemo, useState } from 'react';

import {
  createDate,
  createMonth,
  getMonthNumberOfDays,
  getMonthsNames,
  getWeekDaysNames,
} from '../utils/helpers/date';

const getYearsInterval = (year) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array.from({ length: 10 }).map((_, index) => startYear + index)];
};

export const useCalendar = ({ locale = 'default', selectedDate: date, firstWeekDay = 2 }) => {
  const [mode, setMode] = useState('days');
  const [selectedDay, setSelectedDay] = useState(createDate({ date }));
  console.log('@useCalendar',selectedDay)
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale }),
  );

  const [selectedYear, setSelectedYear] = useState(selectedDay.year);
  const [selectedYearInterval, setSelectedYearInterval] = useState(
    getYearsInterval(selectedDay.year),
  );

  const monthsNames = useMemo(() => getMonthsNames(locale), []);
  const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), []);
  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);
  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);
    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[monthNumberOfDays - 1];

    const shiftIndex = firstWeekDay - 1;

    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i++) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i++) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i++) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }
    return result;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

  const onClickArrow = (direction) => {
    if (mode === 'years') {
      return direction === 'left'
        ? setSelectedYearInterval(getYearsInterval(selectedYearInterval[0] - 10))
        : setSelectedYearInterval(getYearsInterval(selectedYearInterval[0] + 10));
    }

    if (mode === 'months') {
      const year = direction === 'left' ? selectedYear - 1 : selectedYear + 1;
      if (!selectedYearInterval.includes(year)) setSelectedYearInterval(getYearsInterval(year));
      return setSelectedYear(year);
    }

    if (mode === 'days') {
      const monthIndex =
        direction === 'left' ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
        console.log(11)
      if (monthIndex === -1) {
        const year = selectedYear - 1;
        setSelectedYear(year);
        if (!selectedYearInterval.includes(year)) setSelectedYearInterval(getYearsInterval(year));
        return setSelectedMonth(createMonth({ date: new Date(year, 11), locale }));
      }
      if (monthIndex === 12) {
        const year = selectedYear + 1;
        setSelectedYear(year);
        if (!selectedYearInterval.includes(year)) setSelectedYearInterval(getYearsInterval(year));
        return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
      }
      setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
    }
  };

  const setSelectedMonthByIndex = (monthIndex) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  };

  return {

    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthsNames,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearInterval,
    },
    functions: {
      setMode,
      setSelectedDay,
      onClickArrow,
      setSelectedMonthByIndex,
      setSelectedYear
    },
  };
};
