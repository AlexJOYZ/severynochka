import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useHover } from '../../../hooks';

import { addManyCartAction } from '../../../store/reducers/cartReducer';
import { classNames, findUniqueItemsById, formateDate } from '../../../utils/helpers';
import { ORDER_STATUS, ROUTES } from '../../../const';

import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { Button } from '../../UI/buttons/Button/Button';
import { ProductCard } from '../../UI/cards/ProductCard/ProductCard';
import { CalendarIcon } from '../../UI/icons/inputIcons/CalendarIcon';
import { Notice } from '../../UI/notice/Notice';
import { Typography } from '../../UI/Typography/Typography';
import { EyeIcon } from '../../UI/icons/inputIcons/EyeIcon';
import { Grid } from '../Grid';
import { CalendarChangeTimeOfDelivery } from '../../UI/calendarChangeTimeOfDelivery/calendarChangeTimeOfDelivery';

import styles from './Order.module.css';

const limitOrderCount = 4;

export const Order = ({ order }) => {
  const articleRef = useRef();
  const date = new Date(order.dateOfDelivery);
  const isHovering = useHover(articleRef);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showChangeCalendar, setShowChangeCalendar] = useState(false);
  const [selectedDate, selectDate] = useState(date);

  const isInProgress =
    order.status === ORDER_STATUS.NEW.title ||
    order.status === ORDER_STATUS.PICKED.title ||
    order.status === ORDER_STATUS.DELIVERED.title ||
    order.status === ORDER_STATUS.CONFIRMED.title;

  const uniqueProducts = findUniqueItemsById(order.products);

  const [isLimited, setIsLimited] = useState(limitOrderCount < uniqueProducts.length);

  const changeDateOfDelivery = (date) => {
    console.log(date, order.id);
  };
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
          <div className={styles.order__header__button}>
            {isInProgress && (
              <IconButton
                onClick={() => setShowChangeCalendar(true)}
                className={classNames(styles.button__container, styles.status__button)}
                accent='secondary'
                size='m'
                Icon={CalendarIcon}
              >
                Когда доставить
              </IconButton>
            )}
            {showChangeCalendar && (
              <CalendarChangeTimeOfDelivery
                setIsShow={setShowChangeCalendar}
                selectDate={selectDate}
                selectedDate={selectedDate}
                changeDateOfDelivery={changeDateOfDelivery}
              />
            )}

            {!isInProgress && (
              <Button
                onClick={() => {
                  dispatch(addManyCartAction(order.products));
                  navigate(ROUTES.CART);
                }}
                className={classNames(styles.button__container)}
                accent='primary'
                size='m'
              >
                Заказать
              </Button>
            )}
          </div>
        </div>
      </div>
      <Grid>
        {uniqueProducts.map(
          (product, i) =>
            ((isLimited && i < limitOrderCount) || !isLimited) && (
              <ProductCard
                className={styles.order__item}
                key={product.id}
                item={{ ...product, products: order.products }}
                type='ordered'
              />
            ),
        )}
      </Grid>
      {isLimited && isHovering && (
        <div className={classNames(styles.order__button, styles.button__container)}>
          <IconButton onClick={() => setIsLimited(false)} Icon={EyeIcon} size='m'>
            Просмотреть заказ
          </IconButton>
        </div>
      )}
    </article>
  );
};
