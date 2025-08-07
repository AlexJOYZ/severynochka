import { locales } from '../../../assets/locales/ru';

export const validateIsEmpty = (value, message = locales['validations.required']) => {
  if (!value.trim()) return message;
  return null;
};
