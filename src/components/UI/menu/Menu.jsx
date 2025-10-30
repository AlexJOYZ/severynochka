import { forwardRef } from 'react';

import styles from './Menu.module.css';

import { Link } from 'react-router-dom';
import { Typography } from '../Typography/Typography';
import { CATEGORIES } from '../../../const/categories';

export const Menu = forwardRef(function (props, ref) {
  

  return (
    <menu className={`container ${styles.menu}`} ref={ref}>
      {CATEGORIES.map((item) => (
        <Link key={item.id} to={`/categories/catalog/${item.id}`}>
          <Typography as='h2' variant='text-bold' size='s'>
            {item.title}
          </Typography>
        </Link>
      ))}
    </menu>
  );
});
