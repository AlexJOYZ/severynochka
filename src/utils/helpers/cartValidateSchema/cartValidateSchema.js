import { locales } from '../../../const';
import {
  validateContainLowerCase,
  validateContainNumber,
  validateContainSpecialSymbols,
  validateContainUpperCase,
  validateIsEmpty,
  validateMinLength,
} from '../validations';

const streetValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (validateContainNumber(value) || validateContainSpecialSymbols(value))
    return locales['validations.name'];
  else if (validateMinLength(value, 3)) return validateMinLength(value, 3);
  return null;
};

const homeNumberValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (
    !validateContainLowerCase(value) ||
    !validateContainUpperCase(value) ||
    validateContainSpecialSymbols(value)
  )
    return locales['validations.containNumbers'];

  return null;
};

export const cartValidateSchema = {
  street: (value) => streetValidationSchema(value),
  homeNumber: (value) => homeNumberValidationSchema(value),
  apartmentNumber: (value) => homeNumberValidationSchema(value),
};
