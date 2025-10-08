import { validateIsEmpty, validateDateOfBirthday } from '../validations';

import {
  emailValidationSchema,
  nameValidateSchema,
  passwordValidationSchema,
  telephoneValidateSchema,
} from './authFormValidateSchemes';

export const registrationFormValidateSchema = {
  telephone: (value) => telephoneValidateSchema(value),
  dateOfBirthday: (date) => validateDateOfBirthday(date),
  surname: (value) => nameValidateSchema(value),
  name: (value) => nameValidateSchema(value),
  password: (value) => passwordValidationSchema(value),
  passwordRepeat: (value) => validateIsEmpty(value),
  cardNumber: (value) => validateIsEmpty(value),
  email: (value) => emailValidationSchema(value),
  phoneCode: (value) => validateIsEmpty(value),
};
