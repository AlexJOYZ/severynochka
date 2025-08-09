import { useEffect, useState } from 'react';

import { useForm } from '../../../hooks/useForm';

import './styles.css';

import { RegistrationStepOneForm } from './steps/RegistrationStepOneForm';
import { RegistrationStepTwoForm } from './steps/RegistrationStepTwoForm';
import { Typography } from '../../UI/Typography/Typography';
import { REGIONS } from '../../../const/registration/regions';
import { validateIsEmpty } from '../../../utils/helpers/valdiations/validateIsEmpty';
import { validateMaxLength } from '../../../utils/helpers/valdiations/validateMaxLength';
import { validateDateOfBirthday } from '../../../utils/helpers/valdiations/validateDateOfBirthday';
import { validateContainNumber } from '../../../utils/helpers/valdiations/validateContainNumbers';
import { validateContainSpecialSymbols } from '../../../utils/helpers/valdiations/validateContainSpecialSymbols';
import { locales } from '../../../const/locales/ru';
import { validateMinLength } from '../../../utils/helpers/valdiations/validationMinLength';

const nameValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (validateContainNumber(value) || validateContainSpecialSymbols(value))
    return locales['validations.name'];
  else if (validateMinLength(value, 3)) return validateMinLength(value, 3);
  return null;
};

const passwordValidationSchema = (value)=>{
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if ()

}

const registrationFormValidateSchema = {
  telephone: (value) => validateIsEmpty(value),
  dateOfBirthday: (date) => validateDateOfBirthday(date),
  surname: (value) => nameValidateSchema(value),
  name: (value) => nameValidateSchema(value),
  password: (value) => validateMaxLength(value, 8),
  passwordRepeat: (value) => validateMaxLength(value, 8),
  cardNumber: (value) => validateIsEmpty(value),
  email: (value) => validateIsEmpty(value),
  phoneCode: (value) => validateIsEmpty(value),
};

export const RegistrationForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const { state, functions } = useForm({
    initialValues: {
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
    validateSchema: registrationFormValidateSchema,
    validateOnChange: false,
    onSubmit: () => {
      console.log('submit success!');
    },
  });
  const registrationSteps = [
    <RegistrationStepOneForm
      state={state}
      functions={functions}
      setStage={setStage}
      setStep={setStep}
    />,
    <RegistrationStepTwoForm state={state} functions={functions} setStep={setStep} />,
  ];

  return (
    <form className='registration__form' onSubmit={functions.handleSubmit}>
      <Typography className='registration__header' as='h3' variant='header' size='s'>
        Регистрация
      </Typography>
      {registrationSteps[step]}
    </form>
  );
};
