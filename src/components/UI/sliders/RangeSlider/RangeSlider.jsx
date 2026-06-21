import { useState } from 'react';

import styles from './RangeSlider.module.css';

export const RangeSlider = ({ min, max, value, step, onChange }) => {
  const handleMinChange = (e) => {
    let newMinVal = Math.min(+e.target.value, value.max - step);
    if (+e.target.value - min < step) newMinVal = min;
    onChange({ ...value, min: newMinVal });
  };

  const handleMaxChange = (e) => {
    let newMaxVal = Math.max(+e.target.value, value.min + step);
    if (max - +e.target.value < step) newMaxVal = max;
    onChange({ ...value, max: newMaxVal });
  };

  const minPosition = ((value.min - min) / (max - min)) * 100;
  const maxPosition = ((value.max - min) / (max - min)) * 100;

  return (
    <div className={styles.slider__container}>
      <div className={styles.input__wrapper}>
        <input
          className={styles.input}
          type='range'
          value={value.min}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className={styles.input}
          type='range'
          value={value.max}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className={styles.control__wrapper}>
        <div className={styles.thumb} style={{ left: `${minPosition}%` }} />
        <div className={styles.rail}>
          <div
            className={styles.rail__inner}
            style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }}
          />
        </div>
        <div className={styles.thumb} style={{ left: `${maxPosition}%` }} />
      </div>
    </div>
  );
};
