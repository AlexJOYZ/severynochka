export const removeProductFromCart = (mas, id) => {
  let index;
  mas.forEach((item, i) => {
    if (item.id === id) index = i;
  });
  mas.splice(index, 1);
  return mas;
};
