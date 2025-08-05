import { useState } from 'react';

import { Button } from '../../../UI/buttons/Button/Button';
import { Select } from '../../../UI/select/Select';
import { Input } from '../../../UI/fields/Input/Input';
import { InputPassword } from '../../../UI/fields/InputPassword/InputPassword';
import { Checkbox } from '../../../UI/checkbox/Checkbox';
import { InputDate } from '../../../UI/fields/InputDate/InputDate';
import { Tabs } from '../../../UI/tabs/Tabs';
import { Typography } from '../../../UI/Typography/Typography';
import ReactInputMask from 'react-input-mask';
import { REGIONS } from '../../../../const/registration/regions';
import { Tooltip } from '../../../UI/tooltip/Tooltip';

export const RegistrationStepOneForm = ({ setStage, setStep, valuesFields, setFieldValue }) => {
  // const [selectedRegion, selectRegion] = useState(null);

  const genders = [{ title: 'Мужской' }, { title: 'Женский' }];
  

  return (
    <div className='registration__form__step'>
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
            <Tooltip  theme='light' direction='right' isWithIcon={true} label='Label'>
              <ReactInputMask
                value={valuesFields.telephone}
                onChange={(e) => {
                  const telephone = e.target.value;
                  setFieldValue('telephone', telephone);
                }}
                maskChar={null}
                mask='+7 (999) 999-99-99'
                type='tel'
                size='m'
                label='Телефон'
              >
                {(props) => <Input {...props} />}
              </ReactInputMask>
            </Tooltip>
          </div>
          <div className='registration__form__input'>
            <InputDate
              label='Дата рождения'
              selectedDate={valuesFields.dateOfBirthday}
              selectDate={(date) => setFieldValue('dateOfBirthday', date)}
            />
          </div>
          <div className='registration__form__input'>
            <Input
              size='m'
              label='Фамилия'
              value={valuesFields.surname}
              onChange={(e) => {
                const surname = e.target.value;
                setFieldValue('surname', surname);
              }}
            />
          </div>
          <div className='select__container'>
            <Select
              onChange={(region) => {
                setFieldValue('region', region);
                setFieldValue('locality', region.localities[0]);
              }}
              selected={valuesFields.region}
              options={REGIONS}
              label='Регион'
            />
          </div>
          <div className='registration__form__input'>
            <Input
              size='m'
              label='Имя'
              value={valuesFields.name}
              onChange={(e) => {
                const name = e.target.value;
                setFieldValue('name', name);
              }}
            />
          </div>
          <div className='select__container'>
            <Select
              onChange={(locality) => setFieldValue('locality', locality)}
              selected={valuesFields.locality}
              options={valuesFields.region.localities}
              label='Населенный пункт'
            />
          </div>
          <div className='registration__form__input'>
            <InputPassword
              value={valuesFields.password}
              onChange={(e) => {
                const password = e.target.value;
                setFieldValue('password', password);
              }}
              size='m'
              label='Пароль'
            />
          </div>
          <div className='registration__form__input'>
            <Tabs
              className='registration__form__tabs'
              label='Пол'
              tabs={genders}
              setValue={(gender) => setFieldValue('gender', gender)}
            />
          </div>
          <div className='registration__form__input'>
            <InputPassword
              value={valuesFields.passwordRepeat}
              onChange={(e) => {
                const passwordRepeat = e.target.value;
                setFieldValue('passwordRepeat', passwordRepeat);
              }}
              size='m'
              label='Повторить пароль'
            />
          </div>
        </div>
      </section>
      <section className='registration__form__section'>
        <Typography
          as='h3'
          variant='header'
          size='xs'
          className='registration__form__section__header'
        >
          Необязательные поля
        </Typography>
        <div className='registration__form__section__content'>
          <div className='registration__form__input'>
            <ReactInputMask
              value={valuesFields.cardNumber}
              onChange={(e) => setFieldValue('cardNumber', e.target.value)}
              maskChar={null}
              mask='9999 9999 9999 9999'
              disabled={valuesFields.hasNotCardLoyalty}
            >
              {(props) => (
                <Input
                  size='m'
                  label='Номер карты'
                  disabled={valuesFields.hasNotCardLoyalty}
                  {...props}
                />
              )}
            </ReactInputMask>
          </div>

          <div className='registration__form__input'>
            <Input
              size='m'
              label='E-mail'
              value={valuesFields.email}
              onChange={(e) => {
                const email = e.target.value;
                setFieldValue('email', email);
              }}
            />
          </div>

          <Checkbox
            size='m'
            label='У меня нет карты лояльности'
            value={valuesFields.hasNotCardLoyalty}
            setValue={(value) => setFieldValue('hasNotCardLoyalty', value)}
          />
        </div>
      </section>
      <div className='button__container__primary'>
        <Button
          className='button__primary'
          accent='primary'
          size='l'
          onClick={() => setStep((prev) => prev + 1)}
        >
          Продолжить
        </Button>
      </div>
      <div className='button__container__login'>
        <Button accent='secondary' size='s' decoration='outline' onClick={() => setStage('login')}>
          Войти
        </Button>
      </div>
    </div>
  );
};
