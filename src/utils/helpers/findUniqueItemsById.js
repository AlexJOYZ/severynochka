export const findUniqueItemsById = (mas) => {
  const uniqIds = [];
  return mas.filter((element) => {
    if (uniqIds.includes(element.id)) return false;
    uniqIds.push(element.id);
    return true;
  });
};
