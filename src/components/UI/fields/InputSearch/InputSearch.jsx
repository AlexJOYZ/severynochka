import { useState } from 'react';

import styles from './InputSearch.module.css';

import { MenuIcon } from '../../icons/inputIcons/MenuIcon';
import { SearchIcon } from '../../icons/inputIcons/SearchIcon';
import { Typography } from '../../Typography/Typography';
import { classNames } from '../../../../utils/helpers/classNames/classNames';

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
  let searchPattern = '';

  const changeValue = (event) => {
    setValue(event.target.value);
    searchPattern = new RegExp(`${event.target.value.toLowerCase()}`, 'gm');
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
      {isPopUp && (
        <div className={styles.search__elements}>
          {searchingProducts.map((searchingProduct) => {
            const searchValue = value.toLowerCase();
            const title = searchingProduct.title;
            const titleLower = title.toLowerCase();

            const matchIndex = titleLower.indexOf(searchValue);
            if (!value)
              return (
                <li key={searchingProduct.id} className={styles.search__element}>
                  {title}
                  {searchingProduct.isCategory && <MenuIcon />}
                </li>
              );

            const beforeMatch = title.slice(0, matchIndex);
            const match = title.slice(matchIndex, matchIndex + searchValue.length);
            const afterMatch = title.slice(matchIndex + searchValue.length);

            return (
              <li key={searchingProduct.id} className={styles.search__element}>
                <p className={styles.search__text}>
                  {beforeMatch}
                  <span className={styles.search__match}>{match}</span>
                  {afterMatch}
                </p>
                {searchingProduct.isCategory && <MenuIcon />}
              </li>
            );
          })}
          {!searchingProducts.length && (
            <p className={styles.search__error}>
              По запросу
              <Typography as='b' size='s' variant='text-bold'>
                {value}
              </Typography>
              ничего не было найдено!
            </p>
          )}
        </div>
      )}
    </div>
  );
};
