import { locales } from "../../../const";

export const validateContainNumber = (value, message = locales['validations.name']) => {
  if (/\d/g.test(value)) return message;
  return null;
};
