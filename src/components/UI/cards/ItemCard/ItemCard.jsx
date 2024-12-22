import styles from './ItemCard.module.css';

import pancakesImg from '../../../../assets/icons/cards/pancakes-img.svg';

import { Rating } from '../../rating/Rating';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../buttons/Button/Button';

export const ItemCard = ({ item }) => {
  const { title } = item;

  return (
    <article className={styles.card}>
      <div className={`${styles.card__img} ${styles.card__item}`}>
        <img src={pancakesImg} />
      </div>
      <div className='card__content'>
        <div className={`${styles.price__item} ${styles.card__item}`}>
          <div className={styles.price__number}>
            <Typography as='p' variant='text-bold' size='m'>
              <span>40,5</span>₽
            </Typography>
            <Typography className={styles.price} as='p' variant='text' size='s'>
              <span>50,5</span>₽
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
        <Typography className={`${styles.card__item}`} variant='text' as='p' size='s'>
          Г/Ц Блинчики с мясом вес, Россия
        </Typography>
        <Rating rating='4' />
        <div className={`${styles.card__button} ${styles.card__item}`}>
          <Button size='m' decoration='outline' accent='secondary'>
            В корзину
          </Button>
        </div>
      </div>
    </article>
  );
};
