import styles from './Rating.module.css';

import { RatingIcon } from '../icons/rating/RatingIcon';

export const Rating = ({ rating,className='' }) => {
  const widthStar = 17.2
  const widthCover = rating * widthStar;
  return (
    <div className={className}>
      <div className={styles.rating}>
        <div className={styles.star}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
        <div className={styles.star__cover} style={{ width: `${widthCover}px` }}>
          <RatingIcon color='#ff6633' />
          <RatingIcon color='#ff6633' />
          <RatingIcon color='#ff6633' />
          <RatingIcon color='#ff6633' />
          <RatingIcon color='#ff6633' />
        </div>
      </div>
    </div>
  );
};
