import { useState } from 'react';

import ReactInputMask from 'react-input-mask';

import { phoneCodeValidationSchema } from '../../../../utils';

import { Button } from '../../../UI/buttons/Button/Button';
import { Input } from '../../../UI/fields/Input/Input';
import { IconButton } from '../../../UI/buttons/IconButton/IconButton';
import { ArrowFullIcon } from '../../../UI/icons/inputIcons/ArrowFullIcon';
import { Tooltip } from '../../../UI/tooltip/Tooltip';
import { TimerCodeAccept } from '../../timerCodeAccept/TimerCodeAccept';

export const RegistrationStepTwoForm = ({ setStep, state, functions }) => {
  const [enabled, setEnabled] = useState(true);


  return (
    <div className='registration__form__step registration__form__step__2'>
      <div className='registration__code__input__container'>
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
      <div className='registration__prevButton__container'>
        <IconButton
          accent='grayscale'
          decoration='no'
          Icon={ArrowFullIcon}
          size='s'
          onClick={() => setStep((prev) => prev - 1)}
        >
          Вернуться
        </IconButton>
      </div>
    </div>
  );
};
