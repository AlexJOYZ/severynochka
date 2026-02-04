import { useRef } from 'react';

import { useHover } from '../../../hooks';

import { formateDate } from '../../../utils/helpers';
import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { ProductCard } from '../../UI/cards/ProductCard/ProductCard';
import { CalendarIcon } from '../../UI/icons/inputIcons/CalendarIcon';
import { Notice } from '../../UI/notice/Notice';
import { Typography } from '../../UI/Typography/Typography';

import styles from './Order.module.css';
import { EyeIcon } from '../../UI/icons/inputIcons/EyeIcon';

export const Order = ({ order }) => {
  const articleRef = useRef();
  const date = new Date(order.dateOfDelivery);
  const isHovering = useHover(articleRef);

  // console.log(formateDate(order.dateOfDelivery, 'DD.MM.YYYY'));
  return (
    <article ref={articleRef}>
      <div className={styles.order__header}>
        <div className={styles.order__header__left}>
          <Typography as='h3' variant='text-bold' size='l'>
            {formateDate(date, 'DD.MM.YYYY')}
          </Typography>
          <Typography as='h3' variant='text-bold' size='l'>
            {order.timeOfDelivery}
          </Typography>
          <Notice accent='gray' size='m'>
            В процессе
          </Notice>
        </div>
        <div className={styles.order__header__right}>
          <Typography as='p' variant='text' size='l'>
            {order.totalPrice} ₽
          </Typography>

          <IconButton accent='secondary' size='m' Icon={CalendarIcon}>
            В процессе
          </IconButton>
        </div>
      </div>
      <div className={styles.order__main}>
        {order.products.map(
          (product, i) =>
            i < 4 && <ProductCard item={{ ...product, countOrder: 3 }} type='ordered' />,
        )}
      </div>
      {isHovering && (
        <div className={styles.order__button}>
          <IconButton Icon={EyeIcon} size='m'>
            Просмотреть заказ
          </IconButton>
        </div>
      )}
    </article>
  );
};
