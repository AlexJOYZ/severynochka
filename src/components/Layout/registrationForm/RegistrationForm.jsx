import { useState } from 'react';

import { useForm } from '../../../hooks/useForm';
import { useMutation } from '../../../hooks';

import './styles.css';

import { AuthService } from '../../../API/entities/auth';

import { RegistrationStepOneForm } from './steps/RegistrationStepOneForm';
import { RegistrationStepTwoForm } from './steps/RegistrationStepTwoForm';
import { Typography } from '../../UI/Typography/Typography';
import { Spinner } from '../../UI/spinner/Spinner';

import { REGIONS } from '../../../const/registration/regions';
import { registrationFormValidateSchema } from '../../../utils';
import { addUserAction } from '../../../store/reducers/accountReducer';
import { useDispatch } from 'react-redux';

export const RegistrationForm = ({ setStage }) => {
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

  const {
    mutate: registrationMutation,
    isLoading: registrationIsLoading,
    data: registrationData,
    error,
  } = useMutation('registration', (body) => {
    dispatch(addUserAction(body));
    return AuthService.registration(body);
  });

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
    <RegistrationStepTwoForm state={state} functions={functions} setStep={setStep} error={error}/>,
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

      
    </form>
  );
};
