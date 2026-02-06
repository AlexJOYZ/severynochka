import { classNames } from '../../utils/helpers';

import '../../styles/App.css';

export const Flex = ({ children, className = '' }) => {
  return <div className={classNames('flex', className)}>{children}</div>;
};
