import cl from './Button.module.css';

export const Button = ({ children, accent, size, decoration = 'default', className, ...props }) => {
  return (
    <button
      {...props}
      className={[
        cl.button,
        !!className ? className : '',
        cl[accent],
        cl[size],
        cl[decoration],
      ].join(' ')}
    >
      <span>{children}</span>
    </button>
  );
};
