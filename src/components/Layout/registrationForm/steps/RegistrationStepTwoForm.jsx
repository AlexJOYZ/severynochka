import { Button } from '../../../UI/buttons/Button/Button';

export const RegistrationStepTwoForm = ({ setStep }) => {
  return (
    <div>
      2 step
      <Button
        accent='secondary'
        decoration='default'
        size='s'
        onClick={() => setStep((prev) => prev - 1)}
      >
        Prev
      </Button>
      <Button
        accent='secondary'
        decoration='default'
        size='s'
        // onClick={() => setStep((prev) => prev - 1)}
      >
        Prev
      </Button>
    </div>
  );
};
