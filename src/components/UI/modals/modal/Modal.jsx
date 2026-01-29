import { useClickOutside, useKeyDown, useScrollLock } from '../../../../hooks';

import { IconButton } from '../../buttons/IconButton/IconButton';
import { CloseIcon } from '../../icons/header/CloseIcon';

import styles from './Modal.module.css';

export const Modal = ({ children, setIsModal }) => {
  const closeBtn = () => setIsModal(false);

  const modalRef = useClickOutside(closeBtn);

  useKeyDown('Escape', closeBtn);
  useScrollLock();

  return (
    <div className={styles.modal__container}>
      <div ref={modalRef} className={styles.modal__content}>
        {children}
        <div className={styles.btn__container}>
          <IconButton
            onClick={closeBtn}
            size='m'
            decoration='default'
            accent='grayscale'
            Icon={CloseIcon}
          />
        </div>
      </div>
    </div>
  );
};
