import { classNames } from '../../../utils/helpers/classNames/classNames';

import { Typography } from '../Typography/Typography';
import { CheckIcon } from '../icons/checkbox/CheckIcon';
import { CheckMinusIcon } from '../icons/checkbox/CheckMinusIcon';

import style from './Checkbox.module.css';

export const Checkbox = ({
  label = '',
  value,
  size = 'l',
  setValue,
  type = 'check',
  disabled = false,
  className = '',
}) => {
  return (
    <Typography
      className={classNames(style.checkbox__wrapper, className)}
      as='label'
      size={`${size === 'm' ? 's' : 'xs'}`}
      variant='text'
    >
      <input
        className={style.input__checkbox}
        type='checkbox'
        value={value}
        onChange={() => setValue(!value)}
      />
      <span
        aria-hidden='true'
        className={[
          style.checkbox,
          style[size],
          value ? style.checkbox__active : '',
          disabled ? style.checkbox__disabled : '',
        ].join(' ')}
      >
        {value && <>{type === 'unstated' ? <CheckMinusIcon /> : <CheckIcon />}</>}
      </span>
      {label}
    </Typography>
  );
};
