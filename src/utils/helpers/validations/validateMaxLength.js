import { locales } from "../../../const";

export const validateMaxLength = (
  value,
  maxLength,
  maxLengthText=maxLength,
  message = locales['validations.maxLength'].replace('${number}', String(maxLengthText)),
) => {
  if (maxLength < value.length) return message;
  return null;
};
