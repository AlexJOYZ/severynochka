import { useState } from 'react';

import styles from './InputDate.module.css';

import { Calendar } from '../../calendar/Calendar';
import { CalendarIcon } from '../../icons/inputIcons/CalendarIcon';
import { Input } from '../Input/Input';
import { MAX_LENGTH } from '../../../../const/registration/validations';
import { formateDate } from '../../../../utils/helpers/date';
import { useClickOutside } from '../../../../hooks/useClickOutside';

export const InputDate = ({ selectedDate, selectDate, locale = 'default', ...props }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const ref = useClickOutside(() => setShowCalendar(false));
  const inputValue = formateDate(selectedDate, 'DD.MM.YYYY');
  return (
    <div className={styles.date__input__container} onClick={() => setShowCalendar(true)}>
      <div className={styles.input__container}>
        <Input
          placeholder='ДД.ММ.ГГГГ'
          maxLength={MAX_LENGTH.DATE}
          value={inputValue}
          className={styles.input}
          {...props}
        />
        <CalendarIcon className={styles.input__icon} />
      </div>
      {showCalendar && (
        <div className={styles.calendar__container} ref={ref}>
          <Calendar locale={locale} selectedDate={selectedDate} selectDate={selectDate} />
        </div>
      )}
    </div>
  );
};
