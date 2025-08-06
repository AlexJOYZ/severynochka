export const validateIsEmpty = (value, message = 'asa') => {
  if (!value.trim()) return message;
  return null;
};
