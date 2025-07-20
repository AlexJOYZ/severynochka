import { createElement } from 'react';
import './Typography.css';

export const Typography = ({ children, as, size, variant, color, className, ...props }) => {
  return createElement(
    as,
    {
      className: `typography ${variant} ${size} ${!!className ? className.toString() : ''}`,
      style: { color },
      ...props,
    },
    children,
  );
};
