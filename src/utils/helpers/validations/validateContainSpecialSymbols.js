import { locales } from "../../../const";

export const validateContainSpecialSymbols = (value, message = locales['validations.name']) => {
  const specialSymbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (specialSymbolsRegex.test(value)) return message;
  return null;
};
