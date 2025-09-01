import { locales } from "../../../const";

export const validateContainLowerCase = (
  value,
  message = locales['validations.passwordRules.containLowerCase'],
) => {
  if (!/[a-z]/g.test(value)) return message;
  return null;
};
