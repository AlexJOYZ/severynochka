import { validateIsEmpty, validateMinLength } from '../validations';

import { phoneCodeValidationSchema, telephoneValidateSchema } from './authFormValidateSchemes';

const passwordLoginValidationSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  if (validateMinLength(value, 8)) return validateMinLength(value, 8);
};

export const loginFormValidateSchema = {
  telephone: (value) => telephoneValidateSchema(value),
  password: (value) => passwordLoginValidationSchema(value),
  phoneCode: (value) => phoneCodeValidationSchema(value),
};
