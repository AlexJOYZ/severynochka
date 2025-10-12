import styles from './AuthForm.module.css';

import { useState } from 'react';

import { Modal } from '../../UI/modal/Modal';
import { LoginForm } from '../loginForm/LoginForm';
import { RegistrationForm } from '../registrationForm/RegistrationForm';
import { LoginResetPassword } from '../loginForm/LoginResetPassword';

export const AuthForm = ({ setIsModal }) => {
  const [stage, setStage] = useState('login');

  const authStage = {
    login: <LoginForm setIsModal={setIsModal} setStage={setStage} />,
    registration: <RegistrationForm setIsModal={setIsModal} setStage={setStage} />,
    resetPasswordForm: <LoginResetPassword setIsModal={setIsModal} setStage={setStage} />,
  };

  return (
    <>
      <Modal setIsModal={setIsModal}>{authStage[stage]}</Modal>
    </>
  );
};
