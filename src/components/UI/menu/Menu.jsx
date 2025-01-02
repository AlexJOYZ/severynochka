import { forwardRef } from 'react';

import styles from './Menu.module.css';

import { Link } from 'react-router-dom';
import { Typography } from '../Typography/Typography';

export const Menu = forwardRef(function (props, ref) {
  const menuItems = [
    { id: 1, title: 'Молоко, сыр, яйцо', path: 'milk' },
    { id: 2, title: 'Хлеб', path: 'bread' },
    { id: 3, title: 'Фрукты и овощи', path: 'vegetables' },
    { id: 4, title: 'Замороженные продукты', path: 'frozen' },
    { id: 5, title: 'Напитки', path: 'drinks' },
    { id: 6, title: 'Кондитерские изделия', path: 'confectionery' },
    { id: 7, title: 'Чай, кофе', path: 'tea' },
    { id: 8, title: 'Бакалея', path: 'grocery' },
    { id: 9, title: 'Здоровое питание', path: 'healthy_food' },
    { id: 10, title: 'Зоотовары', path: 'pet_supplies' },
    { id: 11, title: 'Непродовольственные товары', path: 'nonfood_products' },
    { id: 12, title: 'Детское питание', path: 'formula' },
    { id: 13, title: 'Мясо, птица, колбаса', path: 'meat' },
  ];

  return (
    <menu className={`container ${styles.menu}`} ref={ref}>
      {menuItems.map((item) => (
        <Link key={item.id} to={`/categories/catalog/${item.path}`}>
          <Typography as='h2' variant='text-bold' size='s'>
            {item.title}
          </Typography>
        </Link>
      ))}
    </menu>
  );
});
