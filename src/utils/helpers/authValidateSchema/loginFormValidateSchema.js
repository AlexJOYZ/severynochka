import { validateIsEmpty } from '../validations';

import { passwordValidationSchema, telephoneValidateSchema } from './authFormValidateSchemes';

export const loginFormValidateSchema = {
  telephone: (value) => telephoneValidateSchema(value),
  password: (value) => passwordValidationSchema(value),
  phoneCode: (value) => validateIsEmpty(value),
};
