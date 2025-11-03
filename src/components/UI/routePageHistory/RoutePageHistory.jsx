import { Link, useLocation } from 'react-router-dom';

import styles from './RoutePageHistory.module.css';

import { Typography } from '../Typography/Typography';
import { ArrowIcon } from '../icons/inputIcons/ArrowIcon';

export const RoutePageHistory = ({ routes }) => {
  const url = useLocation();
  const routesPath = url.pathname.split('/');

  return (
    <Typography className={styles.route__page__history__root} as='p' size='xs' variant='text'>
      {routes.map((route, i) => (
        <div key={route} className={styles.route__page__history}>
          {i !== routes.length - 1 && (
            <>
              <Link to={i === 0 ? '/' : routesPath[i]}>{route}</Link>
              <ArrowIcon className={styles.route__page__history__arrow} />
            </>
          )}
          {i === routes.length - 1 && (
            <span className={styles.route__page__history__current}>{route}</span>
          )}
        </div>
      ))}
    </Typography>
  );
};
