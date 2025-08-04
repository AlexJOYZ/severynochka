import { useState } from 'react';

const getIsShowTooltips = (initialValues) => {
  let obj = {};
  Object.keys(initialValues).forEach((key) => (obj = { ...obj, [key]: false }));
  return obj;
};

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);

  const [isShowTooltips, setIsShowTooltips] = useState(getIsShowTooltips(initialValues));
  const [isSubmiting, setIsSubmiting] = useState(false);

  console.log(values);
  console.log('isShowTooltips', isShowTooltips);

  const setFieldValue = (field, value) => {
    setValues((valuesPrev) => {
      return { ...valuesPrev, [field]: value };
    });
  };

  const setFieldsErrors = () => {};
  const handleSubmit = () => {
    setIsSubmiting(true);
  };
  return {
    values,
    setFieldValue,
    errors,
    setFieldsErrors,
    isSubmiting,
    setIsSubmiting,
    handleSubmit,
    isShowTooltips,
    setIsShowTooltips,
  };
};
