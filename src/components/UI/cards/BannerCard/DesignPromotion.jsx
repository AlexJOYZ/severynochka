import styles from './BannerCard.module.css';


import { CurrencyIcon } from "../../icons/card/currencyIcon";
import { PlusIcon } from "../../icons/card/PlusIcon";

export const DesignPromotion = () => {
  return (
    <>
      <CurrencyIcon className={styles.img__currency_1} />
      <CurrencyIcon className={styles.img__currency_2} />
      <CurrencyIcon className={styles.img__currency_3} />
      <CurrencyIcon className={styles.img__currency_4} />
      <CurrencyIcon className={styles.img__currency_4} />
      <PlusIcon className={styles.img__plus_1} />
      <PlusIcon className={styles.img__plus_2} />
      <PlusIcon className={styles.img__plus_3} />
      <PlusIcon className={styles.img__plus_4} />
      <PlusIcon className={styles.img__plus_5} />
      <PlusIcon className={styles.img__plus_6} />
      <PlusIcon className={styles.img__plus_7} />
      <PlusIcon className={styles.img__plus_8} />
    </>
  );
};
