import { useState } from 'react';

import './styles.css'

import { Typography } from '../../UI/Typography/Typography';
import { LoginStepOneForm } from './steps/LoginStepOneForm';
import { LoginStepTwoForm } from './steps/LoginStepTwoForm';

export const LoginForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const loginFormSteps = [
    <LoginStepOneForm setStep={setStep} setStage={setStage} />,
    <LoginStepTwoForm setStep={setStep} />,
  ];

  return (
    <form className='login__form'>
      <Typography as='h2' variant='header' size='s' >
        Вход
      </Typography>
      {loginFormSteps[step]}
    </form>
  );
};
