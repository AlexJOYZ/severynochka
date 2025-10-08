import { useState } from 'react';

import './styles.css';

import { useForm } from '../../../hooks';

import { loginFormValidateSchema } from '../../../utils';

import { Typography } from '../../UI/Typography/Typography';
import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { LoginStepOneForm } from './steps/LoginStepOneForm';
import { LoginStepTwoForm } from './steps/LoginStepTwoForm';
import { Button } from '../../UI/buttons/Button/Button';
import { ArrowFullIcon } from '../../UI/icons/inputIcons/ArrowFullIcon';

export const LoginForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const { state, functions } = useForm({
    initialValues: {
      telephone: '',
      password: '',
      phoneCode: '',
    },
    validateSchema: loginFormValidateSchema,
    validateOnChange: true,
    onSubmit: async () => {
      console.log('@submit!');
    },
  });

  const loginFormSteps = [
    <LoginStepOneForm state={state} functions={functions} setStep={setStep} setStage={setStage} />,
    <LoginStepTwoForm state={state} functions={functions} setStep={setStep} />,
  ];

  return (
    <form className='login__form'>
      <Typography as='h2' variant='header' size='s'>
        Вход
      </Typography>
      {loginFormSteps[step]}
      <div className='container__btns'>
        {step === 0 && (
          <Button
            accent='secondary'
            size='s'
            decoration='outline'
            onClick={() => setStage('registration')}
          >
            Регистрация
          </Button>
        )}

        {step !== 0 && (
          <IconButton
            accent='grayscale'
            decoration='no'
            Icon={ArrowFullIcon}
            size='s'
            onClick={() => setStep((prev) => prev - 1)}
          >
            Вернуться
          </IconButton>
        )}
        {step < 2 && (
          <Button
            className='login__btn__reset'
            onClick={() => setStage('resetPasswordForm')}
            accent='grayscale'
            size='s'
            decoration='no'
          >
            Забыли пароль?
          </Button>
        )}
      </div>
    </form>
  );
};
