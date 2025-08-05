export const validateIsEmpty = (value, message = '') => {
  if (!value) return message;
  return null;
};
