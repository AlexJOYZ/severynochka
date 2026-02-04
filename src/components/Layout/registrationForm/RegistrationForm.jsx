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
import { constructValuesForSubmit } from '../../../utils/helpers/registartion/constructValuesForSubmit';

export const RegistrationForm = ({ setStage, setIsModal }) => {
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const user = constructValuesForSubmit(state.values);
    registrationMutation(user);
  };

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
      cardDetails: null,
      email: '',
      hasNotCardLoyalty: false,
      phoneCode: '',
    },
    validateSchema: registrationFormValidateSchema,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  const {
    mutate: registrationMutation,
    isLoading: registrationIsLoading,
    data: registrationData,
    error,
  } = useMutation('registration', (body) => AuthService.registration(body), {
    onSuccess: (response) => {
      console.log(response.data.user)
      dispatch(addUserAction(response.data.user));
      setIsModal(false);
    },
    onFailure: (e) => functions.setFieldsErrors('phoneCode', e?.response?.data?.message),
  });

  const registrationSteps = [
    <RegistrationStepOneForm
      state={state}
      functions={functions}
      setStage={setStage}
      setStep={setStep}
    />,
    <RegistrationStepTwoForm state={state} functions={functions} setStep={setStep} error={error} />,
  ];

  return (
    <form
      className='registration__form'
      onSubmit={(e) =>
        functions.handleSubmit(e, state.values.hasNotCardLoyalty ? 'cardDetails' : '')
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
