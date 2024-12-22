import styles from './Rating.module.css';

import { RatingIcon } from '../icons/rating/RatingIcon';

export const Rating = ({ rating }) => {
  return (
    <div>
      <div className={styles.rating}>
        <div className={styles.star}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
        <div className={styles.star__cover}>
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
