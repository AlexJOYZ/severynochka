import { locales } from '../../../const';
import {
  validateContainNumber,
  validateContainSpecialSymbols, validateIsEmpty,
  validateMinLength
} from '../validations';

const streetValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  else if (validateContainNumber(value) || validateContainSpecialSymbols(value))
    return locales['validations.name'];
  else if (validateMinLength(value, 3)) return validateMinLength(value, 3);
  return null;
};

export const cartValidateSchema = {
  street: (value) => streetValidationSchema(value),
  homeNumber: (value) => validateIsEmpty(value),
  apartmentNumber: (value) => validateIsEmpty(value),
};
