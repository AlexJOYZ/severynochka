import { useRef } from 'react';

import { useFocus } from '../../../../hooks/useFocus';

import cl from './Input.module.css';

import { Typography } from '../../Typography/Typography';

export const Input = ({
  value,
  onChange,
  size = 'm',
  disabled = false,
  label = null,
  className = null,
  ...props
}) => {
  const inputRef = useRef();
  const isFocus = useFocus(inputRef);

  return (
    <div className={[cl.input__root, !!className ? className : ''].join(' ')}>
      {!!label && (
        <Typography
          className={cl.input__label}
          as='label'
          size={`${size === 'm' ? 's' : 'm'}`}
          variant='text'
        >
          {label}
        </Typography>
      )}
      <div
        className={`${cl.input__container} ${isFocus ? cl.input__focus : ''} ${cl[size]} ${
          disabled ? cl.disabled : ''
        }`}
      >
        <input  ref={inputRef} {...props} value={value} onChange={onChange} />
      </div>
    </div>
  );
};
