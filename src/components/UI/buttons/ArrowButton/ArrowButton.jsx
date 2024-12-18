import { ArrowIcon } from '../../icons/ArrowIcon';
import { Button } from '../Button/Button';

import cl from '../Button/Button.module.css';

import classes from './ArrowButton.module.css';

export const ArrowButton = ({
  children,
  accent,
  size,
  decoration = 'default',
  direction = 'right',
  type = 'default',
  ...props
}) => {
  return (
    <button
      className={`${cl.button} ${classes.button__arrow} ${classes[type]} ${cl[accent]} ${cl[size]} ${cl[decoration]}`}
      {...props}
    >
      <span className={classes.button__content}>{children}</span>
      <ArrowIcon className={`${classes[direction]} ${classes.icon} ${classes.svg__arrow}`} />
    </button>
  );
};
