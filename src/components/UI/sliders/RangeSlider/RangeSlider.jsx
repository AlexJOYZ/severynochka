import { useState } from 'react';

export const RangeSlider = ({ step, min, max }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event) => {
    const value = parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
  };

  const handleMaxChange = (event) => {
    const value = parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
  };

  return (
    <div>
      <input
        onChange={handleMinChange}
        type='range'
        value={minValue}
        min={min}
        max={max}
        step={step}
      />
      <input onChange={handleMaxChange} type='range' value={maxValue} min={min} max={max} step={step} />
    </div>
  );
};
