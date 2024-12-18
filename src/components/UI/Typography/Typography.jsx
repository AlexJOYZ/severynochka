import { createElement } from 'react';
import './Typography.css';

export const Typography = ({ children, as, size, variant, color, ...props }) => {
  return createElement(
    as,
    {
      className: `typography ${variant} ${size} ${!!props.className ? props.className : ''}`,
      style: { color },
    },
    children,
  );
};
