import { useEffect, useState } from 'react';

import '../../../styles/mapSection/mapSection.css';

import { Map } from '../../UI/Map/Map';
import { Typography } from '../../UI/Typography/Typography';
import { Tabs } from '../../UI/tabs/Tabs';

export const MapSection = () => {
  const mapCoordinates = [
    {
      id: 1,
      title: 'ул. Карла Либкнехта, 201',
      center: [104.31672, 52.27004],
    },
    {
      id: 2,
      title: 'ул. Байкальская, 202/6',
      center: [104.324375, 52.255645],
    },
    {
      id: 3,
      title: 'пр. Юрия Тена, 27',
      center: [104.260339, 52.253126],
    },
    {
      id: 4,
      title: 'ул. Багратиона, 45Б/д',
      center: [104.312522, 52.221718],
    },
  ];

  const [coordinates, setCoordinates] = useState({});

  return (
    <section>
      <Typography className='mapSection__title' as='h2' variant='header' size='m'>
        Наши магазины
      </Typography>
      <Tabs setValue={setCoordinates} tabs={mapCoordinates} />
      <Map coordinates={coordinates} />
    </section>
  );
};
