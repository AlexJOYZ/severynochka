import { useState } from 'react';
import { TimerCodeAccept } from '../../timerCodeAccept/TimerCodeAccept';
import ReactInputMask from 'react-input-mask';
import { Input } from '../../../UI/fields/Input/Input';
import { Tooltip } from '../../../UI/tooltip/Tooltip';
import { Button } from '../../../UI/buttons/Button/Button';
import { phoneCodeValidationSchema } from '../../../../utils';
import { IconButton } from '../../../UI/buttons/IconButton/IconButton';
import { ArrowFullIcon } from '../../../UI/icons/inputIcons/ArrowFullIcon';

export const ConfirmPhoneCode = ({ state, functions, setStep }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <div className='login__code__input '>
        <Tooltip
          direction='up'
          isShowTooltip={!!state.errors?.phoneCode}
          label={state.errors?.phoneCode}
        >
          <ReactInputMask
            maskChar={null}
            value={state.values.phoneCode}
            onFocus={() => functions.resetFieldError('phoneCode')}
            onChange={(e) => functions.setFieldValue('phoneCode', e.target.value)}
            mask='99999'
          >
            {(props) => (
              <Input
                {...props}
                className='registration__code__input'
                type='password'
                size='l'
                label='Код из СМС'
              />
            )}
          </ReactInputMask>
        </Tooltip>
      </div>
      <div className='button__container__primary'>
        <Button
          disabled={phoneCodeValidationSchema(state.values.phoneCode)}
          type='submit'
          accent='primary'
          size='l'
        >
          Подтвердить
        </Button>
      </div>
      <TimerCodeAccept enabled={enabled} setEnabled={setEnabled} values={state.values} />
      <div className='login__button__small'>
        <IconButton
          accent='grayscale'
          decoration='no'
          Icon={ArrowFullIcon}
          size='s'
          onClick={() => setStep('fillUserData')}
        >
          Вернуться
        </IconButton>
      </div>
    </>
  );
};
