import { useState } from 'react';

import { Input } from '../../UI/fields/Input/Input';
import { InputDate } from '../../UI/fields/InputDate/InputDate';
import { Select } from '../../UI/select/Select';
import { Tabs } from '../../UI/tabs/Tabs';
import { Typography } from '../../UI/Typography/Typography';

import { REGIONS } from '../../../const';

export const ChooseDateDelivery = () => {
  const [region, setRegion] = useState(REGIONS[0]);

  const 

  const [deliveryData, setDeliveryData] = useState({
    region: REGIONS[0],
    street: '',
    homeNumber: '',
    apartmentNumber: '',
    additionally: '',
    dateOfDelivery: new Date(),
  });
  return (
    <div className='cart__step'>
      <div className='cart__delivery__item'>
        <Typography as='h3' variant='header' size='m'>
          Куда
        </Typography>
        <div className='cart__delivery__item__inputs'>
          <Select
            onChange={(region) => setRegion(region)}
            selected={region}
            label='Населенный пункт'
            options={REGIONS}
          />
          <Input
            value={deliveryData.street}
            onChange={(e) => setDeliveryData((prev) => ({ ...prev, street: e.target.value }))}
            label='Улица'
          />
          <Input
            value={deliveryData.homeNumber}
            onChange={(e) => setDeliveryData((prev) => ({ ...prev, homeNumber: e.target.value }))}
            label='Дом'
          />
          <Input
            value={deliveryData.apartmentNumber}
            onChange={(e) =>
              setDeliveryData((prev) => ({ ...prev, apartmentNumber: e.target.value }))
            }
            label='Квартира'
          />
          <Input
            value={deliveryData.additionally}
            onChange={(e) => setDeliveryData((prev) => ({ ...prev, additionally: e.target.value }))}
            label='Дополнительно'
          />
        </div>
      </div>
      <div className='cart__delivery__item'>
        <Typography as='h3' variant='header' size='m'>
          Когда
        </Typography>
        <div className='cart__delivery__item__inputs'>
          <InputDate
            label='Дата'
            selectedDate={deliveryData.dateOfDelivery}
            selectDate={(date) => setDeliveryData((prev) => ({ ...prev, dateOfDelivery: date }))}
          />
          <Tabs tabs={} label='Время' />
        </div>
      </div>
    </div>
  );
};
