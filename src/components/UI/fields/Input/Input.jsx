import cl from './Input.module.css';

export const Input = ({ value, onChange, Icon, ...props }) => (
  <div className={cl.input__container}>
    <input {...props} value={value} onChange={(event) => onChange(event.target.value)} />
    {Icon && <Icon />}
  </div>
);