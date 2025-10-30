import styles from './CategoryCard.module.css';

import { Link } from 'react-router-dom';
import { Typography } from '../../Typography/Typography';

export const CategoryCard = ({ category }) => {
  return (
    <Link
      className={styles.categoryCard__container}
      to={'/categories/category/' + category.id}
      style={{ backgroundImage: `url(${category.iconPath})` }}
    >
      <Typography className={styles.categoryCard__header} as='h2' variant='text-bold' size='m'>
        {category.title}
      </Typography>
    </Link>
  );
};
