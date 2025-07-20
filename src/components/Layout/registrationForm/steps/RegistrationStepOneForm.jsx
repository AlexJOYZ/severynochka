import { useState } from 'react';

import { Button } from '../../../UI/buttons/Button/Button';
import { Select } from '../../../UI/select/Select';
import { Input } from '../../../UI/fields/Input/Input';
import { InputPassword } from '../../../UI/fields/InputPassword/InputPassword';
import { Checkbox } from '../../../UI/checkbox/Checkbox';
import { InputDate } from '../../../UI/fields/InputDate/InputDate';
import { Tabs } from '../../../UI/tabs/Tabs';
import { Typography } from '../../../UI/Typography/Typography';

export const RegistrationStepOneForm = ({ setStage, setStep }) => {
  const [selectedRegion, selectRegion] = useState(null);

  const [isChecked, setIsChecked] = useState(false);

  const [selectedDate, selectDate] = useState(new Date());

  const [gender, setGender] = useState(null);
  console.log(gender);

  const regions = [
    { id: 1, value: 'Коми' },
    { id: 2, value: 'Коми2' },
    { id: 3, value: 'dssa' },
    { id: 4, value: 'Коdsdadsaми2' },
    { id: 5, value: 'Коdsdвввыgfgfgfdwewewadsaми2' },
  ];

  const changeRegions = (option) => {
    selectRegion(option);
  };

  const genders = [{ title: 'Мужской' }, { title: 'Женский' }];

  return (
    <div className='registration__form-step-1'>
      <section className='registration__form__section'>
        <Typography
          as='h3'
          variant='header'
          size='xs'
          className='registration__form__section__header'
        >
          Обязательные поля
        </Typography>
        <div className='registration__form__section__content'>
          <div className='registration__form__input'>
            <Input size='m' label='Телефон' />
          </div>
          <div className='registration__form__input'>
            <InputDate label='Дата рождения' selectedDate={selectedDate} selectDate={selectDate} />
          </div>
          <div className='registration__form__input'>
            <Input size='m' label='Фамилия' />
          </div>
          <div className='select__container'>
            <Select
              onChange={changeRegions}
              selected={selectedRegion}
              options={regions}
              label='Регион'
            />
          </div>
          <div className='registration__form__input'>
            <Input size='m' label='Имя' />
          </div>
          <div className='select__container'>
            <Select
              onChange={changeRegions}
              selected={selectedRegion}
              options={regions}
              label='Населенный пункт'
            />
          </div>
          <div className='registration__form__input'>
            <InputPassword size='m' label='Пароль' />
          </div>
          <div className='registration__form__input'>
            <Tabs
              className='registration__form__tabs'
              label='Пол'
              tabs={genders}
              setValue={setGender}
            />
          </div>
          <div className='registration__form__input'>
            <InputPassword size='m' label='Повторить пароль' />
          </div>
        </div>
      </section>
      <Checkbox disabled label='jsdashajdssjahjsa' value={isChecked} setValue={setIsChecked} />

      <Button accent='secondary' size='s' decoration='outline' onClick={() => setStage('login')}>
        Войти
      </Button>
      <Button
        accent='secondary'
        size='s'
        decoration='outline'
        onClick={() => setStep((prev) => prev + 1)}
      >
        Продолжить
      </Button>
    </div>
  );
};
