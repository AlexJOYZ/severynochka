import styles from './Banner.module.css';

export const Banner = ({ type = 'default' }) => (
  <div className={`${styles.banner} ${styles[type]}`}></div>
);
