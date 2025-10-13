import { locales } from "../../../const";

export const validateMinLength = (
  value,
  minLength,
  minLengthText=minLength,
  message = locales['validations.minLength'].replace('${number}', String(minLengthText)),
) => {
  if (minLength > value.length) return message;
  return null;
};
