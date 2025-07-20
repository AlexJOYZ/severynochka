import { Button } from '../../../UI/buttons/Button/Button';
import { Input } from '../../../UI/fields/Input/Input';

export const LoginStepOneForm = ({ setStep, setStage }) => {
  return (
    <div>
      <Input />
      <Button
        accent='secondary'
        size='s'
        decoration='outline'
        onClick={() => setStage('registration')}
      >
        Регистрация
      </Button>
      <Button
        accent='secondary'
        size='s'
        decoration='outline'
        onClick={() => setStep((prev) => prev + 1)}
      >
        Продолжить
      </Button>
    </div>
  );
};
