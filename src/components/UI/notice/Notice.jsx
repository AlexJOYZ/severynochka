import styles from './Notice.module.css';

export const Notice = ({
  type = 'text',
  accent,
  Icon,
  size,
  children,
  position,
  className = '',
}) => {
  return (
    <div
      className={`${styles.notice} ${styles[accent]} ${styles[type]} ${styles[size]} ${className}`}
    >
      {position === 'left' ? <Icon color='white' /> : ''}
      <span className={styles.notice__content}>{children}</span>
      {position === 'right' ? <Icon color='white' /> : ''}
    </div>
  );
};
