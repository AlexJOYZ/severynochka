import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addCartAction, removeCartAction } from '../../../../store/reducers/cartReducer';

import { classNames } from '../../../../utils/helpers/classNames/classNames';

import { Button } from '../../buttons/Button/Button';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Checkbox } from '../../checkbox/Checkbox';
import { MinusIconBtn } from '../../icons/card/MinusIconBtn';
import { PlusIconBtn } from '../../icons/card/PlusIconBtn';
import { Notice } from '../../notice/Notice';
import { Typography } from '../../Typography/Typography';

import styles from '../ProductCard/ProductCard.module.css';
import cardStyles from '../card.module.css';
import cl from './ProductCardTable.module.css';

export const ProductCardTable = ({ item }) => {
  const [isSelected, setIsSelected] = useState(true);

  const dispatch = useDispatch();
  const countProduct = useSelector(
    (state) => state.cart.items.filter((product) => product.id === item.id).length,
  );

  const itemPriceWithDiscount = (item.price - item.price * (item.discount / 100)).toFixed(2);

  const addProductInCart = () => {
    dispatch(addCartAction(item));
  };

  const removeProductInCart = () => {
    dispatch(removeCartAction(item.id));
  };

  return (
    <article
      className={classNames(
        cardStyles.card,
        cl.card__table,
        // isItemHovering ? cl.card__active : '',
        item.discount ? '' : styles.card__prod,
      )}
    >
      <div className={cl.card__left}>
        <div className={cl.card__img__container}>
          <img className={cl.card__img} src={item.imgUrl} />
          <Checkbox value={isSelected} setValue={setIsSelected} size='l' />
        </div>
        {/* <Notice accent='primary' size='m' className={styles.notice}>
          -{item.discount}%
        </Notice> */}
        <div className={cl.card__text}>
          <Typography className={styles.card__title} variant='text' as='p' size='s'>
            {item.title}
          </Typography>
          <div className={styles.price__number}>
            <Typography as='p' variant='text-bold' size='m'>
              <span>{itemPriceWithDiscount}</span>₽
            </Typography>
            <Typography className={styles.price} as='p' variant='text' size='xs'>
              <span>{item.price}</span>₽
            </Typography>
          </div>
        </div>
      </div>
      <div className={cl.card__right}>
        <div>
          <div className={styles.price__text}>
            <Typography as='p' variant='text' size='xs'>
              С картой
            </Typography>
            <Typography as='p' variant='text' size='xs'>
              Обычная
            </Typography>
          </div>
        </div>

        <div className={`${styles.card__button} ${styles.card__item}`}>
          <IconButton
            position='both'
            IconLeft={MinusIconBtn}
            leftClick={removeProductInCart}
            rightClick={addProductInCart}
            IconRight={PlusIconBtn}
            size='m'
            decoration='default'
            accent='secondary'
          >
            {countProduct}
          </IconButton>
        </div>
        <Typography as='p' variant='text-bold' size='m'>
          <span>{countProduct * item.price}</span>₽
        </Typography>
      </div>
    </article>
  );
};
