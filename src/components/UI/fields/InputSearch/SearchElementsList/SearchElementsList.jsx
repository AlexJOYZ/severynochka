import styles from './SearchElementsList.module.css';

import { SearchElement } from './SearchElement/SearchElement';
import { Typography } from '../../../Typography/Typography';

export const SearchElementsList = ({ elements, value }) => {
  return (
    <div className={styles.search__elements}>
      {elements.map((searchingProduct, index) => {
        if (index > 9) return;
        const searchValue = value.toLowerCase();
        const title = searchingProduct.title;
        const titleLower = title.toLowerCase();

        const matchIndex = titleLower.indexOf(searchValue);

        const beforeMatch = title.slice(0, matchIndex);
        const match = title.slice(matchIndex, matchIndex + searchValue.length);
        const afterMatch = title.slice(matchIndex + searchValue.length);

        const newSearchingProduct = { ...searchingProduct, beforeMatch, match, afterMatch };

        return (
          <SearchElement
            key={`${searchingProduct.id}__${searchingProduct.title}`}
            element={newSearchingProduct}
          />
        );
      })}
      {!elements.length && (
        <p className={styles.search__error}>
          По запросу
          <Typography as='b' size='s' variant='text-bold'>
            {value}
          </Typography>
          ничего не было найдено!
        </p>
      )}
    </div>
  );
};
