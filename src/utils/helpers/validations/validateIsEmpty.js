import { locales } from "../../../const";

export const validateIsEmpty = (value, message = locales['validations.required']) => {
  if (!value.trim()) return message;
  return null;
};
