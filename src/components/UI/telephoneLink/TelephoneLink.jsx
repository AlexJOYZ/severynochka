import { TelephoneIcon } from '../icons/footer/TelephoneIcon';
import { Typography } from '../Typography/Typography';

import styles from './TelephoneLink.module.css';

export const TelephoneLink = ({ tel }) => {
  return (
    <a href={'tel:' + tel} className={styles.link__tel}>
      <TelephoneIcon />
      <Typography as='span' variant='text' size='s'>
        {tel}
      </Typography>
    </a>
  );
};
