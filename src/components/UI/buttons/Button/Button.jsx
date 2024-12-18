import cl from './Button.module.css';

export const Button = ({ children, accent, size, decoration = 'default', ...props }) => {
  return (
    <button className={`${cl.button} ${cl[accent]} ${cl[size]} ${cl[decoration]}`} {...props}>
      <span >{children}</span>
    </button>
  );
};
