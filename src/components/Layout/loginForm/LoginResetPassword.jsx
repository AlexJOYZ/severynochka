import ReactInputMask from 'react-input-mask';
import { useForm } from '../../../hooks';

import {
  passwordValidationSchema,
  resetPasswordFormValidateSchemes,
  telephoneValidateSchema,
} from '../../../utils';
import { Input } from '../../UI/fields/Input/Input';
import { Tooltip } from '../../UI/tooltip/Tooltip';

import { Typography } from '../../UI/Typography/Typography';
import { InputPassword } from '../../UI/fields/InputPassword/InputPassword';
import { Button } from '../../UI/buttons/Button/Button';
import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { ArrowFullIcon } from '../../UI/icons/inputIcons/ArrowFullIcon';

export const LoginResetPassword = ({ setStage }) => {
  const { state, functions } = useForm({
    initialValues: {
      telephone: '',
      password: '',
      confirmPassword: '',
    },
    validateSchema: resetPasswordFormValidateSchemes,
    onChange: false,
    onSubmit: () => {
      console.log('@reset password');
    },
  });
  const isValidated =
    telephoneValidateSchema(state.values.password) ||
    passwordValidationSchema(state.values.password) ||
    state.values.password === state.values.confirmPassword;

  return (
    <form className='login__form'>
      <Typography as='h2' variant='header' size='s'>
        Новый пароль
      </Typography>
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
          disabled={isValidated}
          type='button'
          onClick={() => {
            if (!functions.validateForm('phoneCode')) return;
            setStep((prev) => prev + 1);
          }}
        >
          Подтвердить
        </Button>
      </div>
      <div className='login__button__container'>
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
    </form>
  );
};
