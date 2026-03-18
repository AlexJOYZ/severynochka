import { useState } from 'react';

import styles from './RangeSlider.module.css';

export const RangeSlider = ({ step, min, max }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event) => {
    const value = parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
    console.log('newMinValue', newMinValue);
  };

  const handleMaxChange = (event) => {
    const value = parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
    console.log('newMaxValue', newMaxValue);
  };

  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={styles.slider__container}>
      <div className={styles.input__wrapper}>
        <input
          className={styles.input}
          onChange={handleMinChange}
          type='range'
          value={minValue}
          min={min}
          max={max}
          step={step}
        />
        <input
          className={styles.input}
          onChange={handleMaxChange}
          type='range'
          value={maxValue}
          min={min}
          max={max}
          step={step}
        />
      </div>
      <div className={styles.control__wrapper}>
        <div className={styles.thumb} style={{ left: `${minPosition}%` }}></div>
        <div className={styles.rail}>
          <div
            className={styles.rail__inner}
            style={{ left: `${minPosition}%`, right: `${maxPosition}%` }}
          ></div>
        </div>
        <div className={styles.thumb} style={{ left: `${maxPosition}%` }}></div>
      </div>
    </div>
  );
};
