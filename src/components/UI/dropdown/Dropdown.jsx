import cl from './Dropdown.module.css';

import { ArrowButton } from '../buttons/ArrowButton/ArrowButton';
import { Typography } from '../Typography/Typography';
import { useState } from 'react';

export const Dropdown = ({
  label,
  children,
  className = '',
  value = false,
  setValue,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  const showContent = (event) => {
    event.stopPropagation()
    if (!!setValue) setValue(!value);
    else setOpen(!isOpen);
  };

  return (
    <div {...props} className={`${cl.dropdown} ${className}`}>
      <div className={cl.dropdown__header}>
        <Typography variant='text' size='s' as='p'>
          {label}
        </Typography>
        <div className={cl.button__container} onClick={showContent}>
          <ArrowButton
            type='icon-btn'
            decoration='no'
            accent='primary'
            size='m'
            direction={`${isOpen || value ? 'up' : 'down'}`}
          />
        </div>
      </div>
      {(isOpen || value) && <ul className={cl.dropdown__content}>{children}</ul>}
    </div>
  );
};
