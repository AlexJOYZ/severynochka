import { useRef } from 'react';

import { useHover } from '../../../../hooks/useHover';

import { Button } from '../../buttons/Button/Button';
import { Typography } from '../../Typography/Typography';
import { classNames } from '../../../../utils/helpers';

import styles from '../card.module.css';
import cl from './NewsCard.module.css';

export const NewsCard = ({ item }) => {
  const cardRef = useRef();
  const isHovering = useHover(cardRef);

  const dateNews = new Date(item.date).toLocaleDateString('ru');

  return (
    <article
      ref={cardRef}
      className={classNames(styles.card, cl.newsCard, isHovering && styles.card__active)}
    >
      <div className={styles.card__img}>
        <img src={item.imgUrl} alt='news image' />
      </div>
      <div className={cl.newsCard__content}>
        <Typography className={cl.newsCard__date} as='span' variant='text' size='xs'>
          {dateNews}
        </Typography>
        <Typography as='h4' variant='header' size='xs'>
          {item.title}
        </Typography>
        <Typography as='p' variant='text' size='s'>
          {item.subTitle}
        </Typography>
        <div className={cl.button__container}>
          <Button accent='secondary' decoration='default' size='m' disabled={!isHovering}>
            Подробнее
          </Button>
        </div>
      </div>
    </article>
  );
};
