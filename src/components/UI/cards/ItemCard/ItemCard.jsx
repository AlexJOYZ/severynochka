import styles from './ItemCard.module.css';

import pancakesImg from '../../../../assets/icons/cards/pancakes-img.svg';

import { Rating } from '../../rating/Rating';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../buttons/Button/Button';
import { FavoritesIcon } from '../../icons/MenuButtons/FavoritesIcon';
import { IconButton } from '../../buttons/IconButton/IconButton';
import { Notice } from '../../notice/Notice';
import { useRef, useState } from 'react';
import { useHover } from '../../../../hooks/useHover';

export const ItemCard = ({ item }) => {
  const { title } = item;

  const [isFavorite, setIsFavorite] = useState(false);

  const itemRef = useRef();
  const btnRef = useRef();
  
  const isItemHovering = useHover(itemRef);
  const isBtnHovering = useHover(btnRef);

  const clickFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  };


  return (
    <article
      ref={itemRef}
      className={`${styles.card} ${isItemHovering ? styles.card__active : ''}`}
    >
      <div className={styles.card__img}>
        <img src={pancakesImg} />
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
          -50%
        </Notice>
      </div>
      <div className={styles.card__content}>
        <div>
          <div className={styles.price__number}>
            <Typography as='p' variant='text-bold' size='m'>
              <span>40,50</span>₽
            </Typography>
            <Typography className={styles.price} as='p' variant='text' size='s'>
              <span>50,50</span>₽
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
          Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное dsssssssssssssssssssss
        </Typography>
        <Rating rating={2.5} className={styles.card__item} />
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
