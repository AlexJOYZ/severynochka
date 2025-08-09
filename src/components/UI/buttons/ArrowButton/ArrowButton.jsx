import { classNames } from '../../../../utils/helpers/classNames';
import { ArrowIcon } from '../../icons/inputIcons/ArrowIcon';

import cl from '../Button/Button.module.css';

import classes from './ArrowButton.module.css';

export const ArrowButton = ({
  children,
  accent,
  size,
  decoration = 'default',
  direction = 'right',
  iconPosition = 'right',
  buttonType = 'default',
  ...props
}) => {
  return (
    <button
      type=''
      className={classNames(
        cl.button,
        classes.button__arrow,
        classes[buttonType],
        cl[accent],
        cl[size],
        cl[decoration],
      )}
      {...props}
    >
      {iconPosition === 'left' && (
        <ArrowIcon className={classNames(classes[direction], classes.icon)} />
      )}
      <span className={classes.button__content}>{children}</span>
      {iconPosition === 'right' && (
        <ArrowIcon className={classNames(classes[direction], classes.icon)} />
      )}
    </button>
  );
};
