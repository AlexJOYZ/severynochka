import { useState } from 'react';

import cl from './InputSearch.module.css';
import { MenuIcon } from '../../icons/MenuIcon';
import { SearchIcon } from '../../icons/SearchIcon';
import { Typography } from '../../Typography/Typography';

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

  const changeValue = (event) => {
    setValue(event.target.value);
    const searchPattern = new RegExp(`${event.target.value.toLowerCase()}`, 'gm');
    setIsPopUp(true);
    setSearchingProducts(
      products.filter((product) => searchPattern.test(product.title.toLowerCase())),
    );
    console.log(...searchingProducts);
  };

  const hightLight = (props) => {
    const {filter, str} = props
    if (!filter) return str
    const 
  };

  return (
    <div className={`${cl.input__parent} ${isPopUp ? cl.pop__open : ''} `}>
      <div className={`${cl.input__container} `}>
        <input
          {...props}
          className={cl.input}
          type='text'
          value={value}
          placeholder='Найти товар'
          onChange={(e) => changeValue(e)}
          onBlur={() => setIsPopUp(false)}
        />
        <SearchIcon />
      </div>
      {isPopUp && (
        <div className={`${cl.search__elements}`}>
          {searchingProducts.map((searchingProduct) => (
            <li key={searchingProduct.id}>
              {searchingProduct.title}
              {searchingProduct.isCategory && (
                <span>
                  <MenuIcon />
                </span>
              )}
            </li>
          ))}
          {!searchingProducts.length && (
            <p>
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
