import { Input } from '../../UI/fields/Input/Input';
import { InputDate } from '../../UI/fields/InputDate/InputDate';
import { Select } from '../../UI/select/Select';
import { Tabs } from '../../UI/tabs/Tabs';
import { Typography } from '../../UI/Typography/Typography';

import { Tooltip } from '../../UI/tooltip/Tooltip';

export const ChooseDateDelivery = ({ state, functions, tabs, locations }) => {
  return (
    <div className='cart__step'>
      <div className='cart__delivery__item'>
        <Typography className='cart__delivery__item__header' as='h3' variant='header' size='m'>
          Куда
        </Typography>
        <div className='cart__delivery__item__inputs'>
          <div className='input__inner'>
            <Select
              onChange={(region) => functions.setFieldValue('location', region)}
              selected={state.values.location}
              label='Населенный пункт'
              options={locations}
            />
          </div>
          <div className='input__inner'>
            <Tooltip label={state.errors?.street} isShowTooltip={state.errors?.street}>
              <Input
                onFocus={() => functions.resetFieldError('street')}
                value={state.values.street}
                onChange={(e) => functions.setFieldValue('street', e.target.value)}
                label='Улица'
              />
            </Tooltip>
          </div>
          <Tooltip
            className='cart__cart__delivery__item__tooltip'
            label={state.errors?.homeNumber}
            isShowTooltip={state.errors?.homeNumber}
          >
            <Input
              className='cart__cart__delivery__item__input'
              type='number'
              onFocus={() => functions.resetFieldError('homeNumber')}
              maxLength={4}
              value={state.values.homeNumber}
              onChange={(e) => functions.setFieldValue('homeNumber', e.target.value)}
              label='Дом'
            />
          </Tooltip>
          <Tooltip
            label={state.errors?.apartmentNumber}
            isShowTooltip={state.errors?.apartmentNumber}
          >
            <Input
              type='number'
              onFocus={() => functions.resetFieldError('apartmentNumber')}
              value={state.values.apartmentNumber}
              onChange={(e) => functions.setFieldValue('apartmentNumber', e.target.value)}
              label='Квартира'
            />
          </Tooltip>
          <Input
            value={state.values.additionally}
            onChange={(e) => functions.setFieldValue('additionally', e.target.value)}
            label='Дополнительно'
          />
        </div>
      </div>
      <div className='cart__delivery__item'>
        <Typography className='cart__delivery__item__header' as='h3' variant='header' size='m'>
          Когда
        </Typography>
        <div className='cart__delivery__item__inputs'>
          <div className='input__inner'>
            <InputDate
              label='Дата'
              selectedDate={state.values.dateOfDelivery}
              selectDate={(date) => functions.setFieldValue('dateOfDelivery', date)}
            />
          </div>
          <div className='cart__delivery__item__tabs__inner'>
            <Tabs
              setValue={(time) => functions.setFieldValue('timeOfDelivery', time)}
              className='cart__delivery__item__tabs'
              tabs={tabs}
              label='Время'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
