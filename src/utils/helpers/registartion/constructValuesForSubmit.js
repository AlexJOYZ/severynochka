export const constructValuesForSubmit = (values) => {
  const newValues = Object.fromEntries(
    Object.entries(values).filter(
      ([k]) => k !== 'region' && k !== 'locality' && k !== 'passwordRepeat',
    ),
  );
  const user = {
    ...newValues,
    address: {
      region: values.region.value,
      locality: values.locality.value,
    },
    gender: values.gender.title,
  };
  return user;
};
