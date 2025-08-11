import { locales } from "../../../const/locales/ru";

export const validateEmail = (value, message=locales["validations.email"]) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return message;
  return null;
};
