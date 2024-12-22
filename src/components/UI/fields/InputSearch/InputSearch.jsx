import { useCallback, useState } from 'react';

import cl from './InputSearch.module.css';
import { MenuIcon } from '../../icons/inputIcons/MenuIcon';
import { SearchIcon } from '../../icons/inputIcons/SearchIcon';
import { Typography } from '../../Typography/Typography';

export const InputSearch = ({ ...props }) => {
  const [value, setValue] = useState('');
  const [strongStr, setStrongStr] = useState('');
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
    searchingProducts.map((product) => {
      let str = '';
      product.title.split('').map((s) => {
        if (event.target.value.toLowerCase().includes(s.toLowerCase())) {
          str += s;
        }
      });
      setStrongStr(str);
    });
    console.log(...searchingProducts);
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
          maxLength='14'
          onChange={(e) => changeValue(e)}
          onBlur={() => setIsPopUp(false)}
        />
        <SearchIcon />
      </div>
      {isPopUp && (
        <div className={`${cl.search__elements}`}>
          {searchingProducts.map((searchingProduct) => {
            // searchingProduct.title.split(searchPattern).map((s, i, array) => {
            //   if (i < array.length - 1) {
            //     const str = searchingProduct.title.match(searchPattern).shift();

            //     searchingProduct.title = (
            //       <>
            //         {s}
            //         <span style={{ backgroundColor: 'red' }}>{str}</span>
            //       </>
            //     );
            //     console.log('@', searchingProduct.title,str);
            //   }
            // });
            return (
              <li key={searchingProduct.id}>
                {searchingProduct.title}
                <strong>{strongStr}</strong>
                {searchingProduct.isCategory && (
                  <span>
                    <MenuIcon />
                  </span>
                )}
              </li>
            );
          })}
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
