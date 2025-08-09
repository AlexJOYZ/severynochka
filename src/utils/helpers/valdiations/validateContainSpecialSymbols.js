import { locales } from '../../../const/locales/ru';

export const validateContainSpecialSymbols = (value, message = locales['validations.name']) => {
  const specialSymbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (specialSymbolsRegex.test(value)) return message;
  console.log(specialSymbolsRegex.test(value))
  return null;
};
