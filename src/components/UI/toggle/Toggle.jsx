import style from './Toggle.module.css';

export const Toggle = ({ size, value, setValue, label, ...props }) => {
  return (
    <button
      type='button'
      className={`${style.toggle__btn} ${style[size]} ${value ? style.toggled : ''}`}
      onClick={() => setValue(!value)}
      {...props}
    >
      <span className={style.thumb}></span>
    </button>
  );
};
