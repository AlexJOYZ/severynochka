import cl from './MenuButton.module.css'

import { Typography } from '../../Typography/Typography';



export const MenuButton = ({ children, Icon }) => {
  return (
    <div className={cl.button__container}>
      <Icon />
      <Typography  as='p' size='xs' variant='text'>
        {children}
      </Typography>
    </div>
  );
};
