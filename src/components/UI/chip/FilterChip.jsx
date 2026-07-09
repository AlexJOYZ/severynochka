import { classNames } from '../../../utils/helpers';

import { Button } from '../buttons/Button/Button';
import { CloseIcon } from '../icons/header/CloseIcon';

import styles from './FilterChip.module.css';

export const FilterChip = ({ accent = 'primary', label, size = 's', onDelete, className = '' }) => {
  return (
    <div className={classNames(styles.chip__inner, styles[accent], styles[size], className)}>
      <span className={styles.chip__text}>{label}</span>
      <CloseIcon onClick={() => onDelete()} className={styles.chip__icon} />
    </div>
  );
};
