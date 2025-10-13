import { locales } from '../../../const';

import {
  validateIsEmpty,
  validateMinLength,
  validateContainNumber,
  validateContainUpperCase,
  validateContainLowerCase,
  validateEmail,
  validateContainSpecialSymbols,
} from '../validations';

export const telephoneValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  if (validateMinLength(value, 18)) return validateMinLength(value, 18,11);
  return null;
};
export const nameValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (validateContainNumber(value) || validateContainSpecialSymbols(value))
    return locales['validations.name'];
  else if (validateMinLength(value, 3)) return validateMinLength(value, 3);
  return null;
};

export const passwordValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (!validateContainNumber(value))
    return locales['validations.passwordRules.containNumbers'];
  else if (!validateContainSpecialSymbols(value))
    return locales['validations.passwordRules.containSpecialSymbols'];
  else if (validateContainUpperCase(value)) return validateContainUpperCase(value);
  else if (validateContainLowerCase(value)) return validateContainLowerCase(value);
  else if (validateMinLength(value, 8)) return validateMinLength(value, 8);
  return null;
};
export const emailValidationSchema = (value) => {
  if (!validateIsEmpty(value)) {
    return !!validateEmail(value) && validateEmail(value);
  }
  return null;
};

export const phoneCodeValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  if (validateMinLength(value, 5)) return validateMinLength(value, 18);
  return null;
};
