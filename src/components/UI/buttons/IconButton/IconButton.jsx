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
  Icon,
  iconColor,
  ...props
}) => {
  return (
    <button
      className={`${cl.button} ${styles.icon__btn} ${cl[accent]} ${cl[size]} ${cl[decoration]}`}
      {...props}
    >
      {position === 'left' ? <Icon className={classes.icon} color='white' /> : ''}
      <span  className={`${classes.button__content}` }>{children}</span>
      {position === 'right' ? <Icon className={classes.icon} /> : ''}
    </button>
  );
};
