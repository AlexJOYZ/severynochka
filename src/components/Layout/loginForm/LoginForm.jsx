import { useState } from 'react';

import { useDispatch } from 'react-redux';

import './styles.css';

import { useForm, useMutation } from '../../../hooks';

import { AuthService } from '../../../API/entities/auth';
import { loginFormValidateSchema } from '../../../utils';
import { addUserAction } from '../../../store/reducers/accountReducer';

import { Typography } from '../../UI/Typography/Typography';
import { IconButton } from '../../UI/buttons/IconButton/IconButton';
import { LoginStepOneForm } from './steps/LoginStepOneForm';
import { LoginStepTwoForm } from './steps/LoginStepTwoForm';
import { Button } from '../../UI/buttons/Button/Button';
import { ArrowFullIcon } from '../../UI/icons/inputIcons/ArrowFullIcon';
import { LoginStepThreeForm } from './steps/LoginStepThreeForm';
import { Spinner } from '../../UI/spinner/Spinner';

export const LoginForm = ({ setStage, setIsModal }) => {
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

  const { state, functions } = useForm({
    initialValues: {
      telephone: '',
      password: '',
      phoneCode: '',
    },
    validateSchema: loginFormValidateSchema,
    validateOnChange: true,
    onSubmit: async () => loginMutation(state.values),
  });

  const { isLoading: loginIsLoading, mutate: loginMutation } = useMutation(
    'login',
    (body) => AuthService.login(body),
    {
      onSuccess: (response) => {
        dispatch(addUserAction(response.data.user));
        setIsModal(false);
      },
      onFailure: (e) => functions.setFieldsErrors('phoneCode', e?.response?.data?.message),
    },
  );

  const loginFormSteps = [
    <LoginStepOneForm state={state} functions={functions} setStep={setStep} setStage={setStage} />,
    <LoginStepTwoForm state={state} functions={functions} setStep={setStep} />,
    <LoginStepThreeForm state={state} functions={functions} setStep={setStep} />,
  ];

  return (
    <form className='login__form' onSubmit={(e) => functions.handleSubmit(e)}>
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
      {loginIsLoading && <Spinner />}
    </form>
  );
};
