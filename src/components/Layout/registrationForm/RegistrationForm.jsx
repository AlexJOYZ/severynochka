import { useEffect, useState } from 'react';

import { useForm } from '../../../hooks/useForm';
import { useMutation } from '../../../hooks';

import './styles.css';

import { AuthService } from '../../../API/entities/auth';

import { RegistrationStepOneForm } from './steps/RegistrationStepOneForm';
import { RegistrationStepTwoForm } from './steps/RegistrationStepTwoForm';
import { Typography } from '../../UI/Typography/Typography';
import { REGIONS } from '../../../const/registration/regions';
import { validateIsEmpty } from '../../../utils/helpers/valdiations/validateIsEmpty';
import { validateDateOfBirthday } from '../../../utils/helpers/valdiations/validateDateOfBirthday';
import { validateContainNumber } from '../../../utils/helpers/valdiations/validateContainNumbers';
import { validateContainSpecialSymbols } from '../../../utils/helpers/valdiations/validateContainSpecialSymbols';
import { locales } from '../../../const/locales/ru';
import { validateMinLength } from '../../../utils/helpers/valdiations/validateMinLength';
import { validateContainUpperCase } from '../../../utils/helpers/valdiations/validateContainUpperCase';
import { validateContainLowerCase } from '../../../utils/helpers/valdiations/validateContainLowerCase';
import { validateEmail } from '../../../utils/helpers/valdiations/validateEmail';
import { Spinner } from '../../UI/spinner/Spinner';

const telephoneValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  if (validateMinLength(value, 18)) return validateMinLength(value, 18);
  return null;
};
const nameValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (validateContainNumber(value) || validateContainSpecialSymbols(value))
    return locales['validations.name'];
  else if (validateMinLength(value, 3)) return validateMinLength(value, 3);
  return null;
};

export const passwordValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (!validateContainNumber(value))
    return locales['validations.passwordRules.containNumbers'];
  else if (!validateContainSpecialSymbols(value))
    return locales['validations.passwordRules.containSpecialSymbols'];
  else if (validateContainUpperCase(value)) return validateContainUpperCase(value);
  else if (validateContainLowerCase(value)) return validateContainLowerCase(value);
  else if (validateMinLength(value, 8)) return validateMinLength(value, 8);
  return null;
};

const emailValidationSchema = (value) => {
  if (!validateIsEmpty(value)) {
    return !!validateEmail(value) && validateEmail(value);
  }
  return null;
};

const registrationFormValidateSchema = {
  telephone: (value) => telephoneValidateSchema(value),
  dateOfBirthday: (date) => validateDateOfBirthday(date),
  surname: (value) => nameValidateSchema(value),
  name: (value) => nameValidateSchema(value),
  password: (value) => passwordValidationSchema(value),
  passwordRepeat: (value) => validateIsEmpty(value),
  cardNumber: (value) => validateIsEmpty(value),
  email: (value) => emailValidationSchema(value),
  phoneCode: (value) => validateIsEmpty(value),
};

export const RegistrationForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const {
    mutate: registrationMutation,
    isLoading: registrationIsLoading,
    data: registrationData,
    error,
  } = useMutation('registration', (body) => AuthService.registration(body));

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
    onSubmit: async () => {
      const newValues = Object.fromEntries(
        Object.entries(state.values).filter(
          ([k]) => k !== 'region' && k !== 'locality' && k !== 'passwordRepeat',
        ),
      );
      const user = {
        ...newValues,
        address: {
          region: state.values.region.value,
          locality: state.values.locality.value,
        },
        gender: state.values.gender.title,
      };
      registrationMutation(user);
      // if (!data.success) return;
      // console.log('submit success!');
      // const { date: body } = await AuthService.registration(state.values);
      // console.log(body);
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
    <form
      className='registration__form'
      onSubmit={(e) =>
        functions.handleSubmit(e, state.values.hasNotCardLoyalty ? 'cardNumber' : '')
      }
    >
      <Typography className='registration__header' as='h3' variant='header' size='s'>
        Регистрация
      </Typography>
      {registrationSteps[step]}
      {registrationIsLoading && <Spinner />}

      <Typography as='h3' variant='header' size='s'>
        {error?.response?.data?.message || registrationData?.data.message  }
      </Typography>
    </form>
  );
};
