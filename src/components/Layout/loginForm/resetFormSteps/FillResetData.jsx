import ReactInputMask from 'react-input-mask';

import { useKeyDown } from '../../../../hooks';

import { passwordValidationSchema, telephoneValidateSchema } from '../../../../utils';

import { Tooltip } from '../../../UI/tooltip/Tooltip';
import { Input } from '../../../UI/fields/Input/Input';
import { InputPassword } from '../../../UI/fields/InputPassword/InputPassword';
import { Button } from '../../../UI/buttons/Button/Button';
import { IconButton } from '../../../UI/buttons/IconButton/IconButton';
import { ArrowFullIcon } from '../../../UI/icons/inputIcons/ArrowFullIcon';

export const FillResetData = ({ state, functions, setStep, setStage }) => {
  const isValidated =
    !telephoneValidateSchema(state.values.telephone) &&
    !passwordValidationSchema(state.values.password) &&
    state.values.password === state.values.confirmPassword;

  const handler = () => {
    if (!functions.validateForm('phoneCode')) return;
    setStep('confirmPhoneCode');
  };
  useKeyDown('Enter', handler, { ignoreInputs: false });

  return (
    <>
      <div className='login__form__input'>
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
            size='l'
            label='Телефон'
          >
            {(props) => <Input {...props} />}
          </ReactInputMask>
        </Tooltip>
      </div>
      <div className='login__form__input'>
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
            size='l'
            label='Пароль'
          />
        </Tooltip>
      </div>
      <div className='login__form__input'>
        <Tooltip
          direction='up'
          isShowTooltip={!!state.errors?.confirmPassword}
          label={state.errors?.confirmPassword}
        >
          <InputPassword
            value={state.values.confirmPassword}
            onFocus={() => functions.resetFieldError('confirmPassword')}
            onChange={(e) => {
              const confirmPassword = e.target.value;
              functions.setFieldValue('confirmPassword', confirmPassword);
              if (state.values.password !== confirmPassword)
                functions.setFieldsErrors('confirmPassword', 'Пароли должны совпадать');
            }}
            size='l'
            label='Подтвеждение пароля'
          />
        </Tooltip>
      </div>
      <div className='login__button__container'>
        <Button
          accent='primary'
          size='l'
          decoration='default'
          disabled={!isValidated}
          type='button'
          onClick={() => handler()}
        >
          Подтвердить
        </Button>
      </div>
      <div className='login__button__small'>
        <IconButton
          accent='grayscale'
          decoration='no'
          Icon={ArrowFullIcon}
          size='s'
          onClick={() => setStage('login')}
        >
          Вернуться
        </IconButton>
      </div>
    </>
  );
};
