import cl from './Dropdown.module.css';

import { ArrowButton } from '../buttons/ArrowButton/ArrowButton';
import { Typography } from '../Typography/Typography';
import { useState } from 'react';

export const Dropdown = ({
  label,
  children,
  className = '',
  value = null,
  setValue = null,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  const showContent = () => {
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
            buttonType='icon-btn'
            type='button'
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
