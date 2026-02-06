import { classNames } from '../../utils/helpers';

import '../../styles/App.css';

export const Grid = ({ children, className = '' }) => {
  return <div className={classNames('grid', className)}>{children}</div>;
};
