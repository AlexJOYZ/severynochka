import { useEffect, useState } from 'react';

import { useForm } from '../../../hooks/useForm';

import './styles.css';

import { RegistrationStepOneForm } from './steps/RegistrationStepOneForm';
import { RegistrationStepTwoForm } from './steps/RegistrationStepTwoForm';
import { Typography } from '../../UI/Typography/Typography';
import { REGIONS } from '../../../const/registration/regions';

const registrationFormValidateSchema = {
  telephone: (value) => validateIsEmpty(value),
  dateOfBirthday: new Date(),
  surname: (value) => validateIsEmpty(value),
  name: (value) => validateIsEmpty(value),
  password: '',
  passwordRepeat: '',
  cardNumber: '',
  email: '',
  phoneCode: '',
};

export const RegistrationForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const { state, functions } = useForm(
    {
      telephone: '',
      dateOfBirthday: new Date(),
      surname: '',
      name: '',
      region: REGIONS[0],
      locality: REGIONS[0].localities[0],
      password: '',
      passwordRepeat: '',
      gender: { title: 'Мужской' },
      cardNumber: '',
      email: '',
      hasNotCardLoyalty: false,
      phoneCode: '',
    },
    registrationFormValidateSchema,
  );
  const registrationSteps = [
    <RegistrationStepOneForm
      state={state}
      functions={functions}
      setStage={setStage}
      setStep={setStep}
    />,
    <RegistrationStepTwoForm
      state={state}
      functions={functions}
      setStep={setStep}
    />,
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
