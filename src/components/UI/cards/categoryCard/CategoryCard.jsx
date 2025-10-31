import styles from './CategoryCard.module.css';

import { Link } from 'react-router-dom';
import { Typography } from '../../Typography/Typography';
import { classNames } from '../../../../utils/helpers/classNames/classNames';

export const CategoryCard = ({ category, className = '', ...props }) => {
  return (
    <Link
      {...props}
      className={classNames(styles.categoryCard__container, className)}
      to={'/categories/category/' + category.id}
      style={{ backgroundImage: `url(${category.iconPath})` }}
    >
      <Typography className={styles.categoryCard__header} as='h2' variant='text-bold' size='m'>
        {category.title}
      </Typography>
    </Link>
  );
};
