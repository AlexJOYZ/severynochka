import styles from './BannerCard.module.css';

import { Typography } from '../../Typography/Typography';

import cardIcon from './card.jpg';
import promotionIcon from './promotion.png';

export const BannerCard = ({ type }) => {
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
    <div className={`${styles.banner__card} ${styles[type]}`}>
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
        <Typography as='p'></Typography>
      </div>
    </div>
  );
};
