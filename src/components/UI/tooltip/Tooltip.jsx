import styles from './Tooltip.module.css';

import { classNames } from '../../../utils/helpers/classNames';
import { TooltipIcon } from '../icons/tooltip/TooltipIcon';
import { Typography } from '../Typography/Typography';

export const Tooltip = ({
  direction = 'up',
  isWithIcon = true,
  theme = 'error',
  label,
  children,
  isShowTooltip,
}) => {
  return (
    <div className={styles.tooltip__container}>
      {children}
      {isShowTooltip && (
        <div className={classNames(styles.tooltip__innner, styles[direction])}>
          <div className={classNames(styles.tooltip, styles[theme])}>
            {isWithIcon && <TooltipIcon className={styles.tooltip__icon} />}
            <Typography className={styles.tooltip__text} as='span' variant='text' size='s'>
              {label}
            </Typography>
            <span className={styles.tooltip__triangle}></span>
          </div>
        </div>
      )}
    </div>
  );
};
