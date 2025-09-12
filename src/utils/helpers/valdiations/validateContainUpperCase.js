import { locales } from "../../../const";

export const validateContainUpperCase = (
  value,
  message = locales['validations.passwordRules.containUppercase'],
) => {
  if (!/[A-Z]/g.test(value)) return message;
  return null;
};
