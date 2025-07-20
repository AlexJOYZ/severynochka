import { useState } from 'react';

import './styles.css';

import { RegistrationStepOneForm } from './steps/RegistrationStepOneForm';
import { RegistrationStepTwoForm } from './steps/RegistrationStepTwoForm';
import { Typography } from '../../UI/Typography/Typography';

export const RegistrationForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const registrationSteps = [
    <RegistrationStepOneForm setStage={setStage} setStep={setStep} />,
    <RegistrationStepTwoForm setStep={setStep} />,
  ];

  return (
    <div className='registration__form' on>
      <Typography className='registration__header' as='h3' variant='header' size='s'>
        Регистрация
      </Typography>
      {registrationSteps[step]}
    </div>
  );
};
