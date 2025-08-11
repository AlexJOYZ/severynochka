import { locales } from '../../../const/locales/ru';

export const validateMinLength = (
  value,
  minLength,
  message = locales['validations.minLength'].replace('${number}', String(minLength)),
) => {
  if (minLength > value.length) return message;
  return null;
};
