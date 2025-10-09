import { validateIsEmpty } from '../validations';

import {
  passwordValidationSchema,
  phoneCodeValidationSchema,
  telephoneValidateSchema,
} from './authFormValidateSchemes';

export const loginFormValidateSchema = {
  telephone: (value) => telephoneValidateSchema(value),
  password: (value) => passwordValidationSchema(value),
  phoneCode: (value) => phoneCodeValidationSchema(value),
};
