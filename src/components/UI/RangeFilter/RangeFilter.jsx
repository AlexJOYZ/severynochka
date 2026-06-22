import { useEffect, useState } from 'react';

import { Button } from '../buttons/Button/Button';
import { Input } from '../fields/Input/Input';
import { MinusIconBtn } from '../icons/card/MinusIconBtn';
import { RangeSlider } from '../sliders/RangeSlider/RangeSlider';
import { Typography } from '../Typography/Typography';

import styles from './RangeFilter.module.css';

export const RangeFilter = ({ title, step, min, max, value, onChange }) => {
  const [localValues, setLocalValues] = useState(value);

  useEffect(() => {
    setLocalValues(value);
  }, [value.min, value.max]);
  return (
    <div>
      <div className={styles.range__filter__header}>
        <Typography className={styles.range__filter__title} as='p' variant='text' size='s'>
          {title}
        </Typography>
        <Button
          className={styles.range__filter__clear__btn}
          size='s'
          accent='grayscale'
          onClick={() => onChange({ min, max })}
        >
          Очистить
        </Button>
      </div>
      <div className={styles.range__filter__inputs}>
        <Input
          type='text'
          className={styles.range__filter__input}
          value={localValues.min}
          onFocus={(e) => (e.target.value = '')}
          onChange={(e) => {
            const regularNumber = /\d+$/;
            if (e.target.value === '') {
              setLocalValues((prevValue) => ({
                ...prevValue,
                min: min,
              }));
              return;
            } else if (!regularNumber.test(e.target.value)) return;
            setLocalValues((prevValue) => ({
              ...prevValue,
              min: +e.target.value,
            }));
          }}
          onBlur={(e) =>
            onChange((prevValue) => ({
              ...prevValue,
              min: Math.min(localValues.min, value.max - step),
            }))
          }
        />
        <MinusIconBtn className={styles.range__filter__minus} color='#414141' />
        <Input
          type='text'
          className={styles.range__filter__input}
          value={localValues.max}
          onFocus={(e) => (e.target.value = '')}
          onChange={(e) => {
            const regularNumber = /\d+$/;
            if (e.target.value === '') {
              setLocalValues((prevValue) => ({
                ...prevValue,
                max: 0,
              }));
              return;
            } else if (+e.target.value > max) return;
            else if (!regularNumber.test(e.target.value)) return;
            setLocalValues((prev) => ({ ...prev, max: +e.target.value }));
          }}
          onBlur={(e) =>
            onChange((prevValue) => ({
              ...prevValue,
              max: Math.max(localValues.max, value.min + step),
            }))
          }
        />
      </div>
      <RangeSlider step={step} min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
};
