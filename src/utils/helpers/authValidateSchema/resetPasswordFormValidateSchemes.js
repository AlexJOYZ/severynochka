import { validateIsEmpty } from '../validations';
import { telephoneValidateSchema, passwordValidationSchema } from './authFormValidateSchemes';

export const resetPasswordFormValidateSchemes = {
  telephone: (value) => telephoneValidateSchema(value),
  password: (value) => passwordValidationSchema(value),
  confirmPassword: (value) => validateIsEmpty(value),
};
