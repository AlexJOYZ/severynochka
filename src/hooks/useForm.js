import { useState } from 'react';

const getIsShowTooltips = (initialValues) => {
  let obj = {};
  Object.keys(initialValues).forEach((key) => (obj = { ...obj, [key]: false }));
  return obj;
};

export const useForm = (initialValues, validateSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);

  const [isShowTooltips, setIsShowTooltips] = useState(getIsShowTooltips(initialValues));
  const [isSubmiting, setIsSubmiting] = useState(false);

  console.log('values', values);
  console.log('errors', errors);

  const setFieldValue = (field, value) => {
    setValues((valuesPrev) => ({ ...valuesPrev, [field]: value }));
    console.log(!!validateSchema[field])
    if (!validateSchema || (!!validateSchema && !validateSchema[field])) return;
    const error = validateSchema[field](value);
    setErrors((errorsPrev) => ({ ...errorsPrev, [field]: error }));
  };

  const setFieldsErrors = () => {};
  const handleSubmit = () => {
    setIsSubmiting(true);
  };
  return {
    state: {
      values,
      errors,
      isSubmiting,
      isShowTooltips,
    },
    functions: {
      setFieldValue,
      setFieldsErrors,
      setIsSubmiting,
      handleSubmit,
      setIsShowTooltips,
    },
  };
};
