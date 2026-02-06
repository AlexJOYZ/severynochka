import { useRef } from 'react';

import { useHover } from '../../../hooks';

import { classNames, formateDate } from '../../../utils/helpers';

import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { ProductCard } from '../../UI/cards/ProductCard/ProductCard';
import { CalendarIcon } from '../../UI/icons/inputIcons/CalendarIcon';
import { Notice } from '../../UI/notice/Notice';
import { Typography } from '../../UI/Typography/Typography';
import { EyeIcon } from '../../UI/icons/inputIcons/EyeIcon';
import { Grid } from '../Grid';

import styles from './Order.module.css';

export const Order = ({ order }) => {
  const articleRef = useRef();
  const date = new Date(order.dateOfDelivery);
  const isHovering = useHover(articleRef);

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

          <IconButton
            className={classNames(styles.button__container, styles.status__button)}
            accent='secondary'
            size='m'
            Icon={CalendarIcon}
          >
            Когда доставить
          </IconButton>
        </div>
      </div>
      <Grid>
        {order.products.map(
          (product, i) =>
            i < 4 && (
              <ProductCard
                className={styles.order__item}
                key={product.id + i}
                item={{ ...product, countOrder: 3 }}
                type='ordered'
              />
            ),
        )}
      </Grid>
      {isHovering && (
        <div className={classNames(styles.order__button, styles.button__container)}>
          <IconButton Icon={EyeIcon} size='m'>
            Просмотреть заказ
          </IconButton>
        </div>
      )}
    </article>
  );
};
