import styles from './BannerCard.module.css';

import { useRef } from 'react';
import { useHover } from '../../../../hooks/useHover';

import { Typography } from '../../Typography/Typography';

import cardIcon from '../../../../assets/icons/cards/BannerCard/card.jpg';
import promotionIcon from '../../../../assets/icons/cards/BannerCard/promotion.png';
import { DesignPromotion } from './DesignPromotion';

export const BannerCard = ({ type }) => {
  const ref = useRef();
  const isHovering = useHover(ref);

  const bannerObject = {
    card: {
      title: 'Оформите карту «Северяночка»',
      subTitle: 'И получайте бонусы при покупке в магазинах и на сайте',
      imgUrl: cardIcon,
    },
    promotion: {
      title: 'Покупайте акционные товары',
      subTitle: 'И получайте вдвое больше бонусов',
      imgUrl: promotionIcon,
    },
  };
  const banner = bannerObject[type];

  return (
    <div
      className={`${styles.banner__card} ${styles[type]} ${isHovering && styles.hover}`}
      ref={ref}
    >
      <div className={styles.banner__text}>
        <Typography as='h3' variant='header' size='s'>
          {banner.title}
        </Typography>
        <Typography as='p' size='s' variant='text'>
          {banner.subTitle}
        </Typography>
      </div>
      <div className={styles.banner__img}>
        <img src={banner.imgUrl} alt='banner image' />
        {type === 'promotion' && <DesignPromotion />}
      </div>
    </div>
  );
};
