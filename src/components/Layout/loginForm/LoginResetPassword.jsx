import { useForm, useMutation } from '../../../hooks';

import { resetPasswordFormValidateSchemes } from '../../../utils';

import { Typography } from '../../UI/Typography/Typography';
import { useState } from 'react';
import { FillResetData } from './resetFormSteps/FillResetData';
import { ConfirmPhoneCode } from './resetFormSteps/ConfirmPhoneCode';
import { AuthService } from '../../../API/entities/auth';
import { Spinner } from '../../UI/spinner/Spinner';

export const LoginResetPassword = ({ setStage }) => {
  const [step, setStep] = useState('fillUserData');

  const {
    mutate: resetPasswordMutation,
    isLoading,
    error,
  } = useMutation('resetPassword', (body) => AuthService.resetPassword(body), {
    onSuccess: (response) => setStage('login'),
    onFailure: (e) => functions.setFieldsErrors('phoneCode', e?.response?.data?.message),
  });

  const { state, functions } = useForm({
    initialValues: {
      telephone: '',
      password: '',
      confirmPassword: '',
      phoneCode: '',
    },
    validateSchema: resetPasswordFormValidateSchemes,
    onSubmit: () => resetPasswordMutation(state.values),
  });

  return (
    <form className='login__form' onSubmit={functions.handleSubmit}>
      <Typography as='h2' variant='header' size='s'>
        Новый пароль
      </Typography>
      {step === 'fillUserData' && (
        <FillResetData state={state} functions={functions} setStep={setStep} setStage={setStage} />
      )}
      {step === 'confirmPhoneCode' && (
        <ConfirmPhoneCode
          state={state}
          functions={functions}
          setStep={setStep}
        />
      )}
      {isLoading && <Spinner />}
    </form>
  );
};
