import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';
import { Option } from './options/option/Option';
import { ArrowIcon } from '../icons/inputIcons/ArrowIcon';
import { Typography } from '../Typography/Typography';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { SelectedOption } from './options/selectedOption/selectedOption';

export const Select = ({
  options,
  multiselect = false,
  selectedOptions = [],
  selectOptions = null,
  label = null,
  placeholder,
  selected,
  onChange,
}) => {
  const [isOpen, setOpen] = useState(false);

  const rootRef = useClickOutside(() => setOpen(false));

  const handleOptionClick = (option) => {
    setOpen(false);
    onChange(option);
  };

  const closeSelectedOption = (option) => {
    selectOptions(selectedOptions.filter((selectedOption) => option.id !== selectedOption.id));
  };

  useEffect(() => {
    const handleClick = () => setOpen(true);

    rootRef.current.addEventListener('click', handleClick);
  }, []);

  return (
    <div ref={rootRef} className={styles.select__root}>
      {!!label && (
        <Typography as='label' variant='text' size='s' className={styles.select__label}>
          {label}
        </Typography>
      )}
      <div data-is-active={isOpen} className={styles.select__parent}>
        <div className={styles.select__wrapper}>
          <div
            className={`${
              !!selected || (selectedOptions.length !== 0 && multiselect)
                ? styles.select__content
                : styles.select__placeholder
            } `}
          >
            {multiselect && selectedOptions.length !== 0 ? (
              selectedOptions.map((option) => (
                <SelectedOption key={option.id} option={option} onClose={closeSelectedOption} />
              ))
            ) : (
              <Typography as='span' variant='text' size='s'>
                {selected?.value || placeholder}
              </Typography>
            )}
          </div>

          <ArrowIcon className={styles.select__arrow} />
        </div>
        {isOpen && (
          <ul className={styles.select__options}>
            {options.map((option) => {
              if (
                (selected === null && !multiselect) ||
                (selectedOptions.length === 0 && multiselect)
              )
                return <Option key={option.id} option={option} onClick={handleOptionClick} />;
              else if (
                (!multiselect && selected?.id !== option.id) ||
                (!selectedOptions?.some((selectedOption) => selectedOption.id === option.id) &&
                  multiselect)
              )
                return <Option key={option.id} option={option} onClick={handleOptionClick} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
