import styles from './SearchElement.module.css';

import { MenuIcon } from '../../../../icons/inputIcons/MenuIcon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../../../const';

export const SearchElement = ({ element }) => {
  return (
    <Link className={styles.search__link} to={ROUTES.PRODUCT.replace(':id', element.id)}>
      <li className={styles.search__element}>
        <p className={styles.search__text}>
          {element.beforeMatch}
          <span className={styles.search__match}>{element.match}</span>
          {element.afterMatch}
        </p>
        {element.isCategory && <MenuIcon />}
      </li>
    </Link>
  );
};
