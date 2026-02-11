import { useState } from 'react';

import { useClickOutside } from '../../../hooks';

import { createDate } from '../../../utils/helpers';

import { IconButton } from '../buttons/IconButton/IconButton';
import { Calendar } from '../calendar/Calendar';
import { CloseIcon } from '../icons/header/CloseIcon';
import { Tabs } from '../tabs/Tabs';
import { Typography } from '../Typography/Typography';

import styles from './CalendarChangeTimeOfDelivery.module.css';
import { Button } from '../buttons/Button/Button';

const TIMES_TABS = [
  { title: '11:00', id: 1 },
  { title: '14:00', id: 2 },
  { title: '18:00', id: 3 },
  { title: '20:00', id: 4 },
];

export const CalendarChangeTimeOfDelivery = ({
  selectDate,
  selectedDate,
  setIsShow,
  locale = 'default',
  changeDateOfDelivery,
}) => {
  const closeCalendar = () => setIsShow(false);
  const dateRaw = new Date(selectedDate);
  const date = createDate({ date: dateRaw });

  const ref = useClickOutside(closeCalendar);
  const [timeOfDelivery, setTimeOfDelivery] = useState(TIMES_TABS[0]);

  return (
    <div className={styles.calendar__change__container} ref={ref}>
      <div className={styles.calendar__change__header}>
        <Typography as='p' size='m' variant='text'>
          Изменить время
        </Typography>
        <div className={styles.btn__container}>
          <IconButton
            accent='grayscale'
            size='m'
            type='icon-btn'
            Icon={CloseIcon}
            onClick={closeCalendar}
          />
        </div>
      </div>
      <Calendar locale={locale} selectedDate={selectedDate} selectDate={selectDate} />
      <Tabs
        size='m'
        className={styles.calendar__change__tabs}
        setValue={setTimeOfDelivery}
        tabs={TIMES_TABS}
      />
      <Typography className={styles.calendar__change__date} as='p' size='m' variant='text'>
        {date.dayNumber} {date.month} {date.year} {timeOfDelivery.title}
      </Typography>
      <Button
        onClick={() => changeDateOfDelivery({ selectedDate, dateOfDelivery: timeOfDelivery.title })}
        className={styles.calendar__change__primary}
        size='m'
        accent='primary'
      >
        Подтвердить
      </Button>
    </div>
  );
};
