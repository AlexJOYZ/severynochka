import { locales } from '../../../const/locales/ru';

export const validateIsEmpty = (value, message = locales['validations.required']) => {
  if (!value.trim()) return message;
  return null;
};
