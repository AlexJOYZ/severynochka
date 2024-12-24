import styles from './ProductCard.module.css';

import pancakesImg from '../../../../assets/icons/cards/pancakes-img.svg';

import { Rating } from '../../rating/Rating';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../buttons/Button/Button';
import { FavoritesIcon } from '../../icons/MenuButtons/FavoritesIcon';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Notice } from '../../notice/Notice';
import { useRef, useState } from 'react';
import { useHover } from '../../../../hooks/useHover';

export const ProductCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const itemRef = useRef();
  const btnRef = useRef();

  const itemPriceWithDiscount =  (item.price - item.price * (item.discount / 100)).toFixed(2);

  const isItemHovering = useHover(itemRef);
  const isBtnHovering = useHover(btnRef);

  const clickFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <article
      ref={itemRef}
      className={`${styles.card} ${isItemHovering ? styles.card__active : ''} ${
        !!item.discount ? '' : styles.card__prod
      }`}
    >
      <div className={styles.card__img}>
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
          <Button
            size='m'
            decoration={`${isItemHovering ? 'default' : 'outline'}`}
            accent={`${isItemHovering ? 'primary' : 'secondary'}`}
          >
            В корзину
          </Button>
        </div>
      </div>
    </article>
  );
};
