import { useRef, useState } from 'react';

import { useHover } from '../../../hooks';

import { classNames, findUniqueItemsById, formateDate } from '../../../utils/helpers';
import { ORDER_STATUS } from '../../../const';

import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { Button } from '../../UI/buttons/Button/Button';
import { ProductCard } from '../../UI/cards/ProductCard/ProductCard';
import { CalendarIcon } from '../../UI/icons/inputIcons/CalendarIcon';
import { Notice } from '../../UI/notice/Notice';
import { Typography } from '../../UI/Typography/Typography';
import { EyeIcon } from '../../UI/icons/inputIcons/EyeIcon';
import { Grid } from '../Grid';

import styles from './Order.module.css';

const limitOrderCount = 4;

export const Order = ({ order }) => {
  const articleRef = useRef();
  const date = new Date(order.dateOfDelivery);
  const isHovering = useHover(articleRef);

  const isInProgress =
    order.status === ORDER_STATUS.NEW.title ||
    order.status === ORDER_STATUS.PICKED.title ||
    order.status === ORDER_STATUS.DELIVERED.title ||
    order.status === ORDER_STATUS.CONFIRMED.title;

  const [isLimited, setIsLimited] = useState(true);

  const uniqueProducts = findUniqueItemsById(order.products);

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
          {(order.status === ORDER_STATUS.REFUND.title ||
            order.status === ORDER_STATUS.RETURNED.title) && (
            <Notice accent='error' size='m'>
              {ORDER_STATUS.REFUND.title}
            </Notice>
          )}
          {isInProgress && (
            <Notice accent='gray' size='m'>
              В процессе
            </Notice>
          )}
          {order.status === ORDER_STATUS.SUPPLIED.title && (
            <Notice accent='secondary' size='m'>
              {ORDER_STATUS.SUPPLIED.title}
            </Notice>
          )}
          {order.status === ORDER_STATUS.NOT_DELIVERED.title && (
            <Notice accent='error' size='m'>
              {ORDER_STATUS.NOT_DELIVERED.title}
            </Notice>
          )}
        </div>
        <div className={styles.order__header__right}>
          <Typography as='p' variant='text' size='l'>
            {order.totalPrice.toFixed(2)} ₽
          </Typography>

          {isInProgress && (
            <IconButton
              className={classNames(styles.button__container, styles.status__button)}
              accent='secondary'
              size='m'
              Icon={CalendarIcon}
            >
              Когда доставить
            </IconButton>
          )}

          {!isInProgress && (
            <Button className={classNames(styles.button__container)} accent='primary' size='m'>
              Заказать
            </Button>
          )}
        </div>
      </div>
      <Grid>
        {uniqueProducts.map(
          (product, i) =>
            i < limitOrderCount &&
            isLimited && (
              <ProductCard
                className={styles.order__item}
                key={product.id}
                item={{ ...product, products: order.products }}
                type='ordered'
              />
            ),
        )}
      </Grid>
      { limitOrderCount < uniqueProducts.length && isHovering && (
        <div className={classNames(styles.order__button, styles.button__container)}>
          <IconButton onClick={() => setIsLimited(false)} Icon={EyeIcon} size='m'>
            Просмотреть заказ
          </IconButton>
        </div>
      )}
    </article>
  );
};
