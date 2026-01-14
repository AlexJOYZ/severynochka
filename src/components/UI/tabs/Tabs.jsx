import { useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

import { classNames } from '../../../utils/helpers/classNames';

import { Button } from '../buttons/Button/Button';
import { Typography } from '../Typography/Typography';
import { Tooltip } from '../tooltip/Tooltip';

import styles from './Tabs.module.css';

export const Tabs = ({ tabs, setValue = null, label = null, className = null, ...props }) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(null);
  const ref = useClickOutside(() => setHover(null));

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
      <div className={classNames(styles.tabs__content, className)} {...props}>
        {tabs.map((tab, i) => (
          <Tooltip
            key={tab.title}
            theme='light'
            direction='down'
            data-index={i}
            onMouseOver={(e) => setHover(+e.currentTarget.dataset.index)}
            onTouchStart={(e) => setHover(+e.currentTarget.dataset.index)}
            ref={ref}
            isShowTooltip={i === hover && (tab.disabled ?? false)}
            label={tab.message ?? 'Label'}
          >
            <Button
              disabled={tab.disabled ?? false}
              type='button'
              data-index={i}
              onClick={openTab}
              accent={`${i === active ? 'secondary' : 'grayscale'}`}
              size='s'
            >
              {tab.title}
            </Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
