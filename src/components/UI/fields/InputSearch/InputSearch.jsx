import { useState } from 'react';

import styles from './InputSearch.module.css';

import { SearchIcon } from '../../icons/inputIcons/SearchIcon';
import { classNames } from '../../../../utils/helpers/classNames/classNames';
import { SearchElementsList } from './SearchElementsList/SearchElementsList';

export const InputSearch = ({ ...props }) => {
  const [value, setValue] = useState('');
  const [isPopUp, setIsPopUp] = useState(false);
  const [products, setProducts] = useState([
    { title: 'Молоко', id: 1, isCategory: false },
    { title: 'Коктель Молочный', id: 2, isCategory: false },
    { title: 'Йогурт Молочный', id: 3, isCategory: false },
    { title: 'вррв Молочный', id: 5, isCategory: false },
    { title: 'Молоко, сыр, яйцо', id: 4, isCategory: true },
  ]);

  const [searchingProducts, setSearchingProducts] = useState([]);

  let searchPattern;

  const changeValue = (event) => {
    setValue(event.target.value);
    const escapedValue = event.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    searchPattern = new RegExp(`(^|\\s)${escapedValue}`, 'i');
    setIsPopUp(true);
    setSearchingProducts(
      products.filter((product) => searchPattern.test(product.title.toLowerCase())),
    );
  };

  return (
    <div className={classNames(styles.input__parent, isPopUp ? styles.pop__open : '')}>
      <div className={styles.input__container}>
        <input
          {...props}
          className={styles.input}
          type='text'
          value={value}
          placeholder='Найти товар'
          maxLength='14'
          onChange={(e) => changeValue(e)}
          onBlur={() => setIsPopUp(false)}
        />
        <SearchIcon />
      </div>
      {isPopUp && <SearchElementsList elements={searchingProducts} value={value} />}
    </div>
  );
};
