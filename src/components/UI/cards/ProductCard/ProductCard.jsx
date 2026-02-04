import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addCartAction, removeCartAction } from '../../../../store/reducers/cartReducer';

import { classNames } from '../../../../utils/helpers/classNames/classNames';

import { Rating } from '../../rating/Rating';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../buttons/Button/Button';
import { FavoritesIcon } from '../../icons/MenuButtons/FavoritesIcon';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Notice } from '../../notice/Notice';
import { useHover } from '../../../../hooks/useHover';
import { MinusIconBtn } from '../../icons/card/MinusIconBtn';
import { PlusIconBtn } from '../../icons/card/PlusIconBtn';

import styles from './ProductCard.module.css';
import cl from '../card.module.css';
import { CartIcon } from '../../icons/MenuButtons/CartIcon';

export const ProductCard = ({ item, type = 'default' }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  const [isCart, setCart] = useState(false);

  const countProduct = useSelector(
    (state) => state.cart.items.filter((product) => product.id === item.id).length,
  );

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
    dispatch(addCartAction(item));
  };
  const removeProductInCart = () => {
    if (countProduct === 1) setCart(false);
    dispatch(removeCartAction(item.id));
  };

  useEffect(() => {
    setCart(countProduct !== 0);
  }, [countProduct]);

  return (
    <article
      ref={itemRef}
      className={classNames(
        cl.card,
        isItemHovering ? cl.card__active : '',
        item.discount ? '' : styles.card__prod,
      )}
    >
      <div className={cl.card__img}>
        <img src={item.imgUrl} />
        <div
          className={classNames(
            styles.button__container,
            isBtnHovering ? styles.btn__hover : '',
            isFavorite ? styles.btn__favorite : '',
          )}
          ref={btnRef}
          onClick={clickFavoriteBtn}
        >
          <IconButton type='icon-btn' size='s' Icon={FavoritesIcon} accent='grayscale' />
        </div>
        {type === 'ordered' && (
          <div
            className={classNames(
              styles.cart__icon,
              isBtnHovering ? styles.btn__hover : '',
              isFavorite ? styles.btn__favorite : '',
            )}
            ref={btnRef}
            onClick={clickFavoriteBtn}
          >
            <CartIcon />
            <Typography as='h3' variant='text-bold' size='m'>
              {item.countOrder}
            </Typography>
          </div>
        )}

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
        <div className={classNames(styles.card__button, styles.card__item)}>
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
              {countProduct}
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
