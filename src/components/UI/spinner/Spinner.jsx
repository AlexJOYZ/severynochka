import { useScrollLock } from '../../../hooks';

import styles from './Spinner.module.css';

export const Spinner = ({ size = 48, thickness = 4 }) => {
  const SIZE = 44;
  useScrollLock();

  const radius = (SIZE - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={styles.spinner__container}>
      <svg className={styles.spinner__svg} viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
        <circle
          className={styles.spinner__loader}
          cx='44'
          cy='44'
          r={radius}
          strokeWidth={thickness}
        />
      </svg>
      {/* <div ></div> */}
    </div>
  );
};
