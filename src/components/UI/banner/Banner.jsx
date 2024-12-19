import styles from './Banner.module.css';
import png from '../icons/banners/about-360.png'

export const Banner = ({ type = 'default' }) => {
  return (
    <div className={`banner banner-${styles[type]}`}>
      <div className={styles.default}>
        <img src={png} alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
      <div className={styles.about}>
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
    </div>
  );
};
