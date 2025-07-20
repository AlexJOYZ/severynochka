import styles from './AuthForm.module.css';

import { useState } from 'react';

import { Modal } from '../../UI/modal/Modal';
import { LoginForm } from '../loginForm/LoginForm';
import { RegistrationForm } from '../registrationForm/RegistrationForm';

export const AuthForm = ({ setIsModal }) => {
  const [stage, setStage] = useState('login');

  const authStage = {
    login: <LoginForm setStage={setStage} />,
    registration: <RegistrationForm setStage={setStage} />,
  };

  return (
    <>
      <Modal setIsModal={setIsModal}>{authStage[stage]}</Modal>
    </>
  );
};
