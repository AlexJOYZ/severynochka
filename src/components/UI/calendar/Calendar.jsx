import styles from './Calendar.module.css';

import { useCalendar } from '../../../hooks/useCalendar';

import { Typography } from '../Typography/Typography';
import { ArrowButton } from '../buttons/ArrowButton/ArrowButton';
import { checkDateIsEqual } from '../../../utils/helpers/date';
import { classNames } from '../../../utils/helpers/classNames';

export const Calendar = ({ locale = 'default', firstWeekDay = 2, selectedDate, selectDate }) => {
  const { state, functions } = useCalendar({ firstWeekDay, selectedDate, locale });
  return (
    <div className={styles.calendar__container}>
      <div className={styles.calendar__header}>
        <Typography as='h3' size='m' variant='text-bold'>
          {state.mode === 'days' && (
            <div aria-hidden onClick={() => functions.setMode('months')}>
              {state.monthsNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
            </div>
          )}
          {state.mode === 'months' && (
            <div aria-hidden onClick={() => functions.setMode('years')}>
              {state.selectedYear}
            </div>
          )}
          {state.mode === 'years' && (
            <div aria-hidden onClick={() => functions.setMode('days')}>
              {state.selectedYearInterval[0]} -{' '}
              {state.selectedYearInterval[state.selectedYearInterval.length - 1]}
            </div>
          )}
        </Typography>
        <div className={styles.calendar__header__btns}>
          <div className={styles.container__btn}>
            <ArrowButton
              buttonType='icon-btn'
              type='button'
              direction='left'
              size='s'
              decoration='default'
              accent='grayscale'
              onClick={() => functions.onClickArrow('left')}
            />
          </div>
          <div className={styles.container__btn}>
            <ArrowButton
              buttonType='icon-btn'
              type='button'
              size='s'
              decoration='default'
              accent='grayscale'
              onClick={() => functions.onClickArrow('right')}
            />
          </div>
        </div>
      </div>
      <div className={styles.calendar__body}>
        {state.mode === 'days' && (
          <>
            <div className={styles.calendar__week__names}>
              {state.weekDaysNames.map((weekDaysName) => (
                <Typography key={weekDaysName.dayShort} as='li' variant='text' size='m'>
                  {weekDaysName.dayShort}
                </Typography>
              ))}
            </div>
            <div className={styles.calendar__days}>
              {state.calendarDays.map((day) => {
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date);
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <Typography
                    key={`${day.dayNumber} - ${day.monthIndex}`}
                    as='li'
                    variant='text'
                    onClick={() => {
                      selectDate(day.date);
                      functions.setSelectedDay(day);
                    }}
                    size='m'
                    className={[
                      styles.calendar__day,
                      isSelectedDay ? styles.calendar__selected__item : '',
                      isAdditionalDay ? styles.calendar__additional__item : '',
                    ].join(' ')}
                  >
                    {day.dayNumber}
                  </Typography>
                );
              })}
            </div>
          </>
        )}
        {state.mode === 'months' && (
          <div className={styles.calendar__pick__item__container}>
            {state.monthsNames.map((monthsName) => {
              const isSelectedMonth = state.selectedMonth.monthIndex === monthsName.monthIndex;

              return (
                <Typography
                  key={monthsName.month}
                  className={classNames(
                    styles.calendar__pick__item,
                    isSelectedMonth ? styles.calendar__pick__item__selected : '',
                  )}
                  onClick={() => {
                    functions.setMode('days');
                    functions.setSelectedMonthByIndex(monthsName.monthIndex);
                  }}
                  as='li'
                  variant='text'
                  size='m'
                  aria-hidden
                >
                  {monthsName.monthShort}
                </Typography>
              );
            })}
          </div>
        )}
        {state.mode === 'years' && (
          <div className={styles.calendar__pick__item__container}>
            <Typography
              className={`${styles.calendar__pick__item} ${styles.calendar__unchoosable__year}`}
              as='li'
              variant='text'
              size='m'
              aria-hidden
            >
              {state.selectedYearInterval[0] - 1}
            </Typography>
            {state.selectedYearInterval.map((year) => {
              const isSelectedYear = state.selectedYear === year;

              return (
                <Typography
                  key={year}
                  className={classNames(
                    styles.calendar__pick__item,
                    isSelectedYear ? styles.calendar__pick__item__selected : '',
                  )}
                  onClick={() => {
                    functions.setMode('months');
                    functions.setSelectedYear(year);
                  }}
                  as='li'
                  variant='text'
                  size='m'
                  aria-hidden
                >
                  {year}
                </Typography>
              );
            })}
            <Typography
              className={`${styles.calendar__pick__item} ${styles.calendar__unchoosable__year}`}
              as='li'
              variant='text'
              size='m'
              aria-hidden
            >
              {state.selectedYearInterval[state.selectedYearInterval.length - 1] + 1}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
