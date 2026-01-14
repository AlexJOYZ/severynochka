import { forwardRef } from 'react';

import { classNames } from '../../../utils/helpers/classNames';

import { TooltipIcon } from '../icons/tooltip/TooltipIcon';
import { Typography } from '../Typography/Typography';

import styles from './Tooltip.module.css';

export const Tooltip = forwardRef(
  (
    {
      direction = 'up',
      isWithIcon = true,
      theme = 'error',
      label,
      children,
      isShowTooltip,
      className = '',
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} {...props} className={classNames(styles.tooltip__container, className)}>
        {children}
        {isShowTooltip && (
          <div className={classNames(styles.tooltip__inner, styles[direction])}>
            <div className={classNames(styles.tooltip, styles[theme])}>
              {isWithIcon && <TooltipIcon className={styles.tooltip__icon} />}
              <Typography className={styles.tooltip__text} as='span' variant='text' size='s'>
                {label ?? 'Label'}
              </Typography>
              <span className={styles.tooltip__triangle}></span>
            </div>
          </div>
        )}
      </div>
    );
  },
);
