import { Button } from '../../../UI/buttons/Button/Button';
import { Input } from '../../../UI/fields/Input/Input';

export const LoginStepOneForm = ({ setStep, setStage }) => {
  return (
    <>
      <div className='login__form__input'>
        <Input label='Телефон' />
      </div>
      <div className='login__button__container'>
        <Button
          accent='primary'
          size='l'
          decoration='default'
          onClick={() => setStep((prev) => prev + 1)}
        >
          Вход
        </Button>
      </div>

      <div className='container__btns'>
        <Button
          accent='secondary'
          size='s'
          decoration='outline'
          onClick={() => setStage('registration')}
        >
          Регистрация
        </Button>
        <Button accent='grayscale' size='s' decoration='no'>
          Забыли пароль?
        </Button>
      </div>
    </>
  );
};
