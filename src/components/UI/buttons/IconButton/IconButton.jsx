import cl from '../Button/Button.module.css';

import classes from '../ArrowButton/ArrowButton.module.css';

import styles from './IconButton.module.css';

export const IconButton = ({
  children,
  accent,
  size,
  decoration = 'default',
  position = 'left',
  type = 'default',
  Icon = null,
  IconLeft = null,
  leftClick=null,
  rightClick=null,
  IconRight = null,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${cl.button} ${styles.icon__btn} ${classes[type]} ${cl[accent]} ${cl[size]} ${styles[size]} ${cl[decoration]} ${className}`}
      {...props}
    >
      {position === 'left' && position !== 'both' && (
        <Icon className={classes.icon} color='white' />
      )}
      {!!IconLeft && <IconLeft onClick={leftClick} className={classes.icon} color='white' />}
      <span className={classes.button__content}>{children}</span>
      {!!IconRight && <IconRight onClick={rightClick} className={classes.icon} color='white' />}
      {position === 'right' && position !== 'both' && (
        <Icon className={classes.icon} color='white' />
      )}
    </button>
  );
};
