import { Link, useLocation } from 'react-router-dom';

import styles from './RoutePageHistory.module.css';

import { Typography } from '../Typography/Typography';
import { ArrowIcon } from '../icons/inputIcons/ArrowIcon';

export const RoutePageHistory = ({ routes }) => {
  const url = useLocation();
  const routesPath = url.pathname.split('/');
 
  return (
    <Typography className={styles.route__page__history} as='p' size='xs' variant='text'>
      {routes.map((route, i) => (
        <>
          {i !== routes.length - 1 && (
            <>
              <Link to={i === 0 ? '/' : routesPath[i]}>{route}</Link>
              <ArrowIcon className={styles.route__page__history__arrow} />
            </>
          )}
          {i === routes.length - 1 && (
            <span className={styles.route__page__history__current}>{route}</span>
          )}
        </>
      ))}
    </Typography>
  );
};
