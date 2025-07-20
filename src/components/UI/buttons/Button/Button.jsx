import cl from './Button.module.css';

export const Button = ({ children, accent, size, decoration = 'default',className='', ...props }) => {
  return (
    <button {...props} className={`${cl.button} ${cl[className]} ${cl[accent]} ${cl[size]} ${cl[decoration]}`} {...props}>
      <span >{children}</span>
    </button>
  );
};
