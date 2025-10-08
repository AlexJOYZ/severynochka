import { locales } from "../../../const";

export const validateDateOfBirthday = (date, message = locales['validations.dateOfBirthday']) => {
  const today = new Date();
  const birthdayInThisYear = new Date(today.getFullYear(), date.getMonth(), date.getDate());
  let age = today.getFullYear() - date.getFullYear();
  if (today < birthdayInThisYear) age -= 1;
  if (age < 14) return message;
  return null;
};
