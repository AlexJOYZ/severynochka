import { Button } from '../../../UI/buttons/Button/Button';

export const LoginStepTwoForm = ({  setStep }) => {
  return (
    <div>
      2
      <Button
        accent='primary'
        size='m'
        decoration='outline'
        onClick={() => setStep((prev) => prev - 1)}
      >
        Назад
      </Button>
    </div>
  );
};
