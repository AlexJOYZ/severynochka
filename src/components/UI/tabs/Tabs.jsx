import { useState } from 'react';
import { Button } from '../buttons/Button/Button';

import styles from './Tabs.module.css';
import { Typography } from '../Typography/Typography';
import { classNames } from '../../../utils/helpers/classNames';

export const Tabs = ({ tabs, setValue = null, label = null, ...props }) => {
  const [active, setActive] = useState(0);

  const openTab = (e) => {
    const indexTab = +e.currentTarget.dataset.index;
    setActive(indexTab);
    if (!!setValue) {
      setValue(tabs[indexTab]);
    }
  };

  return (
    <div className={styles.tabs__root}>
      {!!label && (
        <Typography className={styles.tabs__label} as='label' size='s' variant='text'>
          {label}
        </Typography>
      )}
      <div
        className={classNames(styles.tabs__content, !!props.className ? props.className : '')}
        {...props}
      >
        {tabs.map((tab, i) => (
          <Button
          type='button'
            key={tab.title}
            data-index={i}
            onClick={openTab}
            accent={`${i === active ? 'secondary' : 'grayscale'}`}
            size='s'
          >
            {tab.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
