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

export const RegistrationStepOneForm = ({ setStage, setStep, state, functions }) => {
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
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.telephone}
              isWithIcon={true}
              label={state.errors?.telephone}
            >
              <ReactInputMask
                value={state.values.telephone}
                onChange={(e) => {
                  const telephone = e.target.value;
                  functions.setFieldValue('telephone', telephone);
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
              selectedDate={state.values.dateOfBirthday}
              selectDate={(date) => functions.setFieldValue('dateOfBirthday', date)}
            />
          </div>
          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.surname}
              label={state.errors?.surname}
            >
              <Input
                size='m'
                label='Фамилия'
                value={state.values.surname}
                onChange={(e) => {
                  const surname = e.target.value;
                  functions.setFieldValue('surname', surname);
                }}
              />
            </Tooltip>
          </div>
          <div className='select__container'>
            <Select
              onChange={(region) => {
                functions.setFieldValue('region', region);
                functions.setFieldValue('locality', region.localities[0]);
              }}
              selected={state.values.region}
              options={REGIONS}
              label='Регион'
            />
          </div>
          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.name}
              label={state.errors?.name}
            >
              <Input
                size='m'
                label='Имя'
                value={state.values.name}
                onChange={(e) => {
                  const name = e.target.value;
                  functions.setFieldValue('name', name);
                }}
              />
            </Tooltip>
          </div>
          <div className='select__container'>
            <Select
              onChange={(locality) => functions.setFieldValue('locality', locality)}
              selected={state.values.locality}
              options={state.values.region.localities}
              label='Населенный пункт'
            />
          </div>
          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.password}
              label={state.errors?.password}
            >
              <InputPassword
                value={state.values.password}
                onChange={(e) => {
                  const password = e.target.value;
                  functions.setFieldValue('password', password);
                }}
                size='m'
                label='Пароль'
              />
            </Tooltip>
          </div>
          <div className='registration__form__input'>
            <Tabs
              className='registration__form__tabs'
              label='Пол'
              tabs={genders}
              setValue={(gender) => functions.setFieldValue('gender', gender)}
            />
          </div>
          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.passwordRepeat}
              label={state.errors?.passwordRepeat}
            >
              <InputPassword
                value={state.values.passwordRepeat}
                onChange={(e) => {
                  const passwordRepeat = e.target.value;
                  functions.setFieldValue('passwordRepeat', passwordRepeat);
                }}
                size='m'
                label='Повторить пароль'
              />
            </Tooltip>
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
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.cardNumber && !state.values.hasNotCardLoyalty}
              label={state.errors?.cardNumber}
            >
              <ReactInputMask
                value={state.values.cardNumber}
                onChange={(e) => functions.setFieldValue('cardNumber', e.target.value)}
                maskChar={null}
                mask='9999 9999 9999 9999'
                disabled={state.values.hasNotCardLoyalty}
              >
                {(props) => (
                  <Input
                    size='m'
                    label='Номер карты'
                    disabled={state.values.hasNotCardLoyalty}
                    {...props}
                  />
                )}
              </ReactInputMask>
            </Tooltip>
          </div>

          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={state.isShowTooltips.email}
              label={state.errors?.email}
            >
              <Input
                size='m'
                label='E-mail'
                value={state.values.email}
                onChange={(e) => {
                  const email = e.target.value;
                  functions.setFieldValue('email', email);
                }}
              />
            </Tooltip>
          </div>

          <Checkbox
            size='m'
            label='У меня нет карты лояльности'
            value={state.values.hasNotCardLoyalty}
            setValue={(value) => functions.setFieldValue('hasNotCardLoyalty', value)}
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
