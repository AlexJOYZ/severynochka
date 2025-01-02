import { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { addCartAction, removeCartAction } from '../../../../store/reducers/cartReducer';

import styles from './ProductCard.module.css';
import cl from '../card.module.css';

import { Rating } from '../../rating/Rating';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../buttons/Button/Button';
import { FavoritesIcon } from '../../icons/MenuButtons/FavoritesIcon';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Notice } from '../../notice/Notice';
import { useHover } from '../../../../hooks/useHover';
import { MinusIconBtn } from '../../icons/card/MinusIconBtn';
import { PlusIconBtn } from '../../icons/card/PlusIconBtn';

export const ProductCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  const [isCart, setCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const dispatch = useDispatch();

  const itemRef = useRef();
  const btnRef = useRef();

  const itemPriceWithDiscount = (item.price - item.price * (item.discount / 100)).toFixed(2);

  const isItemHovering = useHover(itemRef);
  const isBtnHovering = useHover(btnRef);

  const clickFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
  };

  const addProductInCart = () => {
    setCart(true);
    setCartCount((prev) => prev + 1);
    dispatch(addCartAction(item));
  };
  const removeProductInCart = () => {
    if (cartCount===1) setCart(false);
    setCartCount((prev) => prev - 1);
    dispatch(removeCartAction(item.id));
  };

  return (
    <article
      ref={itemRef}
      className={`${cl.card} ${isItemHovering ? cl.card__active : ''} ${
        !!item.discount ? '' : styles.card__prod
      }`}
    >
      <div className={cl.card__img}>
        <img src={item.imgUrl} />
        <div
          className={`${styles.button__container} ${isBtnHovering ? styles.btn__hover : ''} ${
            isFavorite ? styles.btn__favorite : ''
          }`}
          ref={btnRef}
          onClick={clickFavoriteBtn}
        >
          <IconButton type='icon-btn' size='s' Icon={FavoritesIcon} accent='grayscale' />
        </div>
        <Notice accent='primary' size='m' className={styles.notice}>
          -{item.discount}%
        </Notice>
      </div>
      <div className={styles.card__content}>
        <div>
          <div className={styles.price__number}>
            <Typography as='p' variant='text-bold' size='m'>
              <span>{itemPriceWithDiscount}</span>₽
            </Typography>
            <Typography className={styles.price} as='p' variant='text' size='s'>
              <span>{item.price}</span>₽
            </Typography>
          </div>
          <div className={styles.price__text}>
            <Typography as='p' variant='text' size='xs'>
              С картой
            </Typography>
            <Typography as='p' variant='text' size='xs'>
              Обычная
            </Typography>
          </div>
        </div>
        <Typography className={styles.card__title} variant='text' as='p' size='s'>
          {item.title}
        </Typography>
        <Rating rating={item.rating} className={styles.card__item} />
        <div className={`${styles.card__button} ${styles.card__item}`}>
          {isCart ? (
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
              {cartCount}
            </IconButton>
          ) : (
            <Button
              size='m'
              decoration={`${isItemHovering ? 'default' : 'outline'}`}
              accent={`${isItemHovering ? 'primary' : 'secondary'}`}
              onClick={addProductInCart}
            >
              В корзину
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
