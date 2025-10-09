import ReactInputMask from 'react-input-mask';

import { Input } from '../../../UI/fields/Input/Input';
import { Tooltip } from '../../../UI/tooltip/Tooltip';
import { useState } from 'react';
import { TimerCodeAccept } from '../../timerCodeAccept/TimerCodeAccept';
import { Button } from '../../../UI/buttons/Button/Button';
import { phoneCodeValidationSchema } from '../../../../utils';

export const LoginStepThreeForm = ({ state, functions }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
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
              className='login__code__input'
              type='password'
              size='l'
              label='Код из СМС'
            />
          )}
        </ReactInputMask>
      </Tooltip>
      <div className='login__button__container'>
        <Button disabled={phoneCodeValidationSchema(state.values.phoneCode)} type='submit' accent='primary' size='l'>
          Подтвердить
        </Button>
      </div>
      <TimerCodeAccept enabled={enabled} setEnabled={setEnabled} values={state.values} />
    </>
  );
};
