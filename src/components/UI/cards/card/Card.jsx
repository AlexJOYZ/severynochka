import { classNames } from '../../../../utils/helpers/classNames';

import styles from './Card.module.css';

export const Card = ({ children, className = null }) => {
  return <article className={classNames(styles.card, className && className)}>{children}</article>;
};
