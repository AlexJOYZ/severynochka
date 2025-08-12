import { useEffect, useState } from 'react';

import { Typography } from '../../UI/Typography/Typography';
import { TIMER__DEFAULT__VALUE } from '../../../const/registration';
import { AuthService } from '../../../API/entities/auth';

export const TimerCodeAccept = ({
  enabled,
  setEnabled,
  startTime = TIMER__DEFAULT__VALUE,
  values,
}) => {
  const [seconds, setSeconds] = useState(startTime);

  const resetTimer = () => {
    setSeconds(TIMER__DEFAULT__VALUE);
    setEnabled(false);
  };
  useEffect(() => {
    const timer = setInterval(() => setSeconds((prevSeconds) => prevSeconds - 1), 1000);
    if (!enabled) return clearInterval(timer);
    return () => clearInterval(timer);
  }, [enabled]);

  useEffect(() => {
    const createCode = async () => {
      const { data } = await AuthService.createPhoneCode(values);
      console.log(data);
    };
    if (seconds === 0) return resetTimer();
    if (seconds === TIMER__DEFAULT__VALUE && enabled) createCode();
  }, [seconds, enabled]);

  return (
    <>
      {!enabled ? (
        <Typography
          onClick={() => setEnabled(true)}
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
    </>
  );
};
