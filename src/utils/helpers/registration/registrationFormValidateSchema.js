import {
  validateIsEmpty,
  validateMinLength,
  validateContainNumber,
  validateContainUpperCase,
  validateContainLowerCase,
  validateDateOfBirthday,
  validateEmail,
  validateContainSpecialSymbols,
} from '../valdiations';

const telephoneValidateSchema = (value) => {
  if (validateIsEmpty(value)) return validateIsEmpty(value);
  if (validateMinLength(value, 18)) return validateMinLength(value, 18);
  return null;
};
const nameValidateSchema = (value) => {
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

const emailValidationSchema = (value) => {
  if (!validateIsEmpty(value)) {
    return !!validateEmail(value) && validateEmail(value);
  }
  return null;
};

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
