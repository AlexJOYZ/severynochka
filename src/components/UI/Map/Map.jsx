import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import { MAP_API_KEY } from '../../../const/MapKey';
import { MapWrapper } from './MapWrapper';

export const Map = () => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: [55.31878, 25.235],
        zoom: 13,
        key: MAP_API_KEY,
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div style={{ width: '100%', height: '354px' }}>
      <MapWrapper />
    </div>
  );
};
