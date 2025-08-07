import { useState } from 'react';

// const getIsShowTooltips = (initialValues) => {
//   let obj = {};
//   Object.keys(initialValues).forEach((key) => (obj = { ...obj, [key]: false }));
//   return obj;
// };

export const useForm = ({ initialValues, validateSchema, validateOnChange = true, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState();

  const [isSubmiting, setIsSubmiting] = useState(false);

  const setFieldValue = (field, value) => {
    setValues((valuesPrev) => ({ ...valuesPrev, [field]: value }));
    const validateSchemaExistForField = !!validateSchema && !!validateSchema[field];
    if (!validateSchemaExistForField || !validateOnChange) return;
    const error = validateSchema[field](value);
    setErrors((errorsPrev) => ({ ...errorsPrev, [field]: error }));
  };

  const validateForm = () => {
    let isErrorExist = false;
    let errors = {};
    Object.keys(values).forEach((field) => {
      if (!validateSchema[field]) return;
      console.log(validateSchema[field]);
      const error = validateSchema[field](values[field]);
      if (error) isErrorExist = true;
      errors = { ...errors, [field]: error };
    });
    setErrors(errors);
    return !isErrorExist;
  };

  const setFieldsErrors = (field, error) =>
    setErrors((errorsPrev) => ({ ...errorsPrev, [field]: error }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) return;
    setIsSubmiting(true);
    return !!onSubmit && onSubmit(values);
  };

  console.log('values', values);
  console.log('errors', errors);
  return {
    state: {
      values,
      errors,
      isSubmiting,
    },
    functions: {
      setFieldValue,
      setFieldsErrors,
      setIsSubmiting,
      handleSubmit,
      validateForm,
    },
  };
};
