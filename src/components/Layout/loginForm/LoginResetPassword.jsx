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
import { useState } from 'react';
import { FillResetData } from './resetFormSteps/FillResetData';
import { ConfirmPhoneCode } from './resetFormSteps/ConfirmPhoneCode';

export const LoginResetPassword = ({ setStage }) => {
  const [step, setStep] = useState('fillUserData');

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
 

  return (
    <form className='login__form'>
      <Typography as='h2' variant='header' size='s'>
        Новый пароль
      </Typography>
      {step === 'fillUserData' && (
        <FillResetData state={state} functions={functions} setStep={setStep} />
      )}
      {step === 'confirmPhoneCode' && (
        <ConfirmPhoneCode
          state={state}
          functions={functions}
          setStage={setStage}
          setStep={setStep}
        />
      )}
    </form>
  );
};
