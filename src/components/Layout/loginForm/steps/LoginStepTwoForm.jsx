import '../styles.css';

import { passwordValidationSchema } from '../../../../utils';
import { Button } from '../../../UI/buttons/Button/Button';
import { InputPassword } from '../../../UI/fields/InputPassword/InputPassword';
import { Tooltip } from '../../../UI/tooltip/Tooltip';

export const LoginStepTwoForm = ({ state, functions, setStep }) => {
  return (
    <>
      <div className='registration__form__input'>
        <Tooltip
          direction='up'
          isShowTooltip={!!state.errors?.password}
          label={state.errors?.password}
        >
          <InputPassword
            value={state.values.password}
            onChange={(e) => {
              const password = e.target.value;
              functions.setFieldValue('password', password);
            }}
            onFocus={() => functions.resetFieldError('password')}
            size='m'
            label='Пароль'
          />
        </Tooltip>
      </div>
      <div className='login__button__container'>
        <Button
          accent='primary'
          size='l'
          decoration='default'
          disabled={passwordValidationSchema(state.values.password)}
          type='button'
          onClick={() => {
            if (!functions.validateForm(  'phoneCode')) return;
            setStep((prev) => prev + 1);
          }}
        >
          Подтвердить
        </Button>
      </div>
    </>
  );
};
