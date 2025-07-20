import style from './Checkbox.module.css';

import { Typography } from '../Typography/Typography';
import { CheckIcon } from '../icons/checkbox/CheckIcon';
import { CheckMinusIcon } from '../icons/checkbox/CheckMinusIcon';

export const Checkbox = ({ label = '', value, setValue, type = 'check', disabled = false }) => {
  return (
    <Typography className={style.checkbox__wrapper} as='label' size='s' variant='text'>
      <input
        className={style.input__checkbox}
        type='checkbox'
        value={value}
        onChange={() => setValue(!value)}
      />
      <span
        aria-hidden='true'
        className={`${style.checkbox} ${value ? style.checkbox__active : ''} ${
          disabled ? style.checkbox__disabled : ''
        } `}
      >
        {value && <>{type === 'unstated' ? <CheckMinusIcon /> : <CheckIcon />}</>}
      </span>
      {label}
    </Typography>
  );
};
