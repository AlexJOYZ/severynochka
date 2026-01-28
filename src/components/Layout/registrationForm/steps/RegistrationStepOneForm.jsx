import ReactInputMask from 'react-input-mask';

import { useKeyDown } from '../../../../hooks';

import { passwordValidationSchema } from '../../../../utils';
import { locales } from '../../../../const/locales/ru';

import { Button } from '../../../UI/buttons/Button/Button';
import { Select } from '../../../UI/select/Select';
import { Input } from '../../../UI/fields/Input/Input';
import { InputPassword } from '../../../UI/fields/InputPassword/InputPassword';
import { Checkbox } from '../../../UI/checkbox/Checkbox';
import { InputDate } from '../../../UI/fields/InputDate/InputDate';
import { Tabs } from '../../../UI/tabs/Tabs';
import { Typography } from '../../../UI/Typography/Typography';
import { REGIONS } from '../../../../const/registration/regions';
import { Tooltip } from '../../../UI/tooltip/Tooltip';

export const RegistrationStepOneForm = ({ setStage, setStep, state, functions }) => {
  const genders = [{ title: 'Мужской' }, { title: 'Женский' }];

  const handlerClickConfirm = () => {
    if (
      !functions.validateForm(state.values.hasNotCardLoyalty ? 'cardNumber' : '', 'phoneCode') ||
      state.values.passwordRepeat !== state.values.password
    ) {
      if (
        state.values.passwordRepeat !== state.values.password &&
        !passwordValidationSchema(state.values.password)
      )
        functions.setFieldsErrors('passwordRepeat', locales['validations.passwordRules.mustMatch']);

      return;
    }
    setStep((prev) => prev + 1);
  };
  useKeyDown('Enter', handlerClickConfirm, { ignoreInputs: false });

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
              isShowTooltip={!!state.errors?.telephone}
              label={state.errors?.telephone}
            >
              <ReactInputMask
                value={state.values.telephone}
                onChange={(e) => {
                  const telephone = e.target.value;
                  functions.setFieldValue('telephone', telephone);
                }}
                onFocus={() => functions.resetFieldError('telephone')}
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
            <Tooltip
              direction='up'
              isShowTooltip={!!state.errors?.dateOfBirthday}
              label={state.errors?.dateOfBirthday}
              onClick={() => functions.resetFieldError('dateOfBirthday')}
            >
              <InputDate
                label='Дата рождения'
                selectedDate={state.values.dateOfBirthday}
                selectDate={(date) => functions.setFieldValue('dateOfBirthday', date)}
              />
            </Tooltip>
          </div>
          <div className='registration__form__input'>
            <Tooltip
              direction='up'
              isShowTooltip={!!state.errors?.surname}
              label={state.errors?.surname}
            >
              <Input
                size='m'
                onFocus={() => functions.resetFieldError('surname')}
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
            <Tooltip direction='up' isShowTooltip={!!state.errors?.name} label={state.errors?.name}>
              <Input
                size='m'
                label='Имя'
                value={state.values.name}
                onFocus={() => functions.resetFieldError('name')}
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
              isShowTooltip={!!state.errors?.password}
              label={state.errors?.password}
            >
              <InputPassword
                value={state.values.password}
                onChange={(e) => {
                  const password = e.target.value;
                  functions.setFieldValue('password', password);
                }}
                onFocus={() => functions.resetFieldError('password')}
                size='m'
                label='Пароль'
              />
            </Tooltip>
          </div>
          <div className='registration__form__input registration__form__tabs__container'>
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
              isShowTooltip={!!state.errors?.passwordRepeat}
              label={state.errors?.passwordRepeat}
            >
              <InputPassword
                value={state.values.passwordRepeat}
                onFocus={() => functions.resetFieldError('passwordRepeat')}
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
              isShowTooltip={!!state.errors?.cardDetails && !state.values.hasNotCardLoyalty}
              label={state.errors?.cardDetails}
            >
              <ReactInputMask
                onFocus={() => functions.resetFieldError('cardDetails')}
                value={state.values.cardNumber}
                onChange={(e) => functions.setFieldValue('cardDetails', e.target.value)}
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
              isShowTooltip={!!state.errors?.email}
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
                onFocus={() => functions.resetFieldError('email')}
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
          type='button'
          onClick={handlerClickConfirm}
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
