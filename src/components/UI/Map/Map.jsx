import { useEffect } from 'react';

import styles from './Map.module.css';

import { load } from '@2gis/mapgl';

import { MAP_API_KEY, MAP_INITIAL_COORDINATES } from '../../../const/Map';
import { MapWrapper } from './MapWrapper';

export const Map = ({ coordinates }) => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: coordinates.center ?? MAP_INITIAL_COORDINATES,
        zoom: 18,
        key: MAP_API_KEY,
      });
      const marker = new mapglAPI.Marker(map, {
        coordinates: coordinates.center ?? MAP_INITIAL_COORDINATES,
      });
    });

    return () => map && map.destroy();
  }, [coordinates]);

  return (
    <div className={styles.map}>
      <MapWrapper />
    </div>
  );
};
