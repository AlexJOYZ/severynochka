import { useEffect, useState } from 'react';

import ReactInputMask from 'react-input-mask';

import { Button } from '../../../UI/buttons/Button/Button';
import { Input } from '../../../UI/fields/Input/Input';
import { Typography } from '../../../UI/Typography/Typography';
import { IconButton } from '../../../UI/buttons/IconButton/IconButton';
import { ArrowFullIcon } from '../../../UI/icons/inputIcons/ArrowFullIcon';
import { TIMER__DEFAULT__VALUE } from '../../../../const/registration';
import { Tooltip } from '../../../UI/tooltip/Tooltip';

export const RegistrationStepTwoForm = ({ setStep, state, functions }) => {
  const [seconds, setSeconds] = useState(TIMER__DEFAULT__VALUE);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) return clearInterval(timer);
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

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
          onClick={functions.handleSubmit}
          accent='primary'
          size='l'
          className='button__primary'
        >
          Подтвердить
        </Button>
      </div>
      {seconds === 0 ? (
        <Typography
          onClick={() => {
            setSeconds(TIMER__DEFAULT__VALUE);
          }}
          className='registration__button__repeat'
          as='p'
          variant='text'
          size='xs'
        >
          Отправить ещё раз
        </Typography>
      ) : (
        <Typography className='registration__text__timer' as='p' variant='text' size='xs'>
          Запросить код повторно можно через{' '}
          <Typography as='b' variant='text-bold' size='xs'>
            {seconds} {seconds === 1 ? 'секунду' : 'секунд'}
          </Typography>
        </Typography>
      )}
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
