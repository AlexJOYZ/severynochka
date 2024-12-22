import styles from './RatingIcon.module.css';

export const RatingIcon = ({ type = 's', color = '#BFBFBF' }) => {
  return (
    <div className={styles[type]}>
      <svg
        width='14'
        height='13'
        viewBox='0 0 14 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.star__s}
      >
        <path
          d='M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z'
          fill={color}
        />
      </svg>
      <svg
        width='22'
        height='20'
        viewBox='0 0 22 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.star__m}
      >
        <path
          d='M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737401 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z'
          fill={color}
        />
      </svg>
    </div>
  );
};