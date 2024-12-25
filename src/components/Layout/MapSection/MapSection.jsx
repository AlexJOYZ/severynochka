import { useEffect } from 'react';
import { Map } from '../../UI/Map/Map';
import { Typography } from '../../UI/Typography/Typography';
import { Button } from '../../UI/buttons/Button/Button';

export const MapSection = () => {
  const changeCoordinates = (event) => {
    console.log(event.target);
  };

  return (
    <section>
      <Typography as='h2' variant='header' size='m'>
        Наши магазины
      </Typography>
      <div className='map__btns'>
        <Button accent='secondary' size='s' onClick={changeCoordinates}>
          п.Щельяюр
        </Button>
        <Button accent='secondary' size='s' onClick={changeCoordinates}>
          д.Вертеп
        </Button>
        <Button accent='secondary' size='s' onClick={changeCoordinates}>
          с.Краснобор
        </Button>
        <Button accent='secondary' size='s' onClick={changeCoordinates}>
          д.Диюр
        </Button>
      </div>
      <Map />
    </section>
  );
};
