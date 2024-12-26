import { useState } from 'react';
import { Button } from '../buttons/Button/Button';

import styles from './Tabs.module.css'

export const Tabs = ({ tabs, setValue = null }) => {
  const [active, setActive] = useState(0);

  const openTab = (e) => {
    const indexTab = +e.currentTarget.dataset.index;
    setActive(indexTab);
    if (!!setValue) {
      setValue(tabs[indexTab]);
    }
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab, i) => (
        <Button
          key={tab.id}
          data-index={i}
          onClick={openTab}
          accent={`${i === active ? 'secondary' : 'grayscale'}`}
          size='s'
        >
          {tab.title}
        </Button>
      ))}
    </div>
  );
};
