import { useState } from 'react';

import { Modal } from '../modal/Modal';
import { SuccessAnimationIcon } from '../../icons/modals/SuccessAnimationIcon';
import { FailureAnimationIcon } from '../../icons/modals/FailureAnimationIcon';
import { Typography } from '../../Typography/Typography';

import styles from './ModalStatusMessage.module.css';

export const ModalStatusMessage = ({ type, setIsModal, title, subTitle, children = null }) => {
  return (
    <Modal setIsModal={setIsModal}>
      <div className={styles.modal__content}>
        {type === 'success' && <SuccessAnimationIcon size={140} />}
        {type === 'failure' && <FailureAnimationIcon size={140} />}
        <Typography as='h2' variant='header' size='m'>
          {title}
        </Typography>
        <Typography as='p' variant='text' size='m'>
          {subTitle}
        </Typography>
        {children}
      </div>
    </Modal>
  );
};
