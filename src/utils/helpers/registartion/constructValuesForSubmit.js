export const constructValuesForSubmit = (values) => {
  const newValues = Object.fromEntries(
    Object.entries(values).filter(
      ([k]) =>
        k !== 'region' && k !== 'locality' && k !== 'passwordRepeat' && k !== 'hasNotCardLoyalty',
    ),
  );
  const user = {
    ...newValues,
    address: {
      region: values.region.value,
      locality: values.locality.value,
    },
    gender: values.gender.title,
    cardBalance: 0,
  };
  return user;
};
