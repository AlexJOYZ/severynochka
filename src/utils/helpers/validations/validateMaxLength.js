import { locales } from "../../../const";

export const validateMaxLength = (
  value,
  maxLength,
  message = locales['validations.maxLength'].replace('${number}', String(maxLength)),
) => {
  if (maxLength < value.length) return message;
  return null;
};
