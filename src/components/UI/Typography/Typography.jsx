import { createElement } from 'react';

import { classNames } from '../../../utils/helpers';

import styles from './Typography.module.css';

export const Typography = ({
  children,
  as,
  size,
  variant = 'text',
  color,
  className,
  ...props
}) => {
  return createElement(
    as,
    {
      className: classNames(
        styles.typography,
        styles[variant],
        styles[size],
        className ? className : '',
      ),
      style: { color },
      ...props,
    },
    children,
  );
};
