import ReactInputMask from 'react-input-mask';
import { Button } from '../../../UI/buttons/Button/Button';
import { Input } from '../../../UI/fields/Input/Input';
import { Tooltip } from '../../../UI/tooltip/Tooltip';
import { telephoneValidateSchema } from '../../../../utils/helpers/authValidateSchema/authFormValidateSchemes';

export const LoginStepOneForm = ({ state, functions, setStep, setStage }) => {
  return (
    <>
      <div className='login__form__input'>
        <Tooltip
          direction='up'
          isShowTooltip={!!state.errors?.telephone}
          label={state.errors?.telephone}
        >
          <ReactInputMask
            value={state.values.telephone}
            onChange={(e) => {
              const telephone = e.target.value;
              functions.setFieldValue('telephone', telephone);
            }}
            onFocus={() => functions.resetFieldError('telephone')}
            maskChar={null}
            mask='+7 (999) 999-99-99'
            type='tel'
            size='l'
            label='Телефон'
          >
            {(props) => <Input {...props} />}
          </ReactInputMask>
        </Tooltip>
      </div>
      <div className='login__button__container'>
        <Button
          accent='primary'
          size='l'
          decoration='default'
          disabled={telephoneValidateSchema(state.values.telephone)}
          type='button'
          onClick={() => {
            if (!functions.validateForm('password', 'phoneCode')) return;
            setStep((prev) => prev + 1);
          }}
        >
          Вход
        </Button>
      </div>

      
    </>
  );
};
