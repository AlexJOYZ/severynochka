import { classNames } from '../../../../utils/helpers';

import cl from './Button.module.css';

export const Button = ({ children, accent, size, decoration = 'default', className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        cl.button,
        !!className ? className : '',
        cl[accent],
        cl[size],
        cl[decoration],
      )}
    >
      <span>{children}</span>
    </button>
  );
};
