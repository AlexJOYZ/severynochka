export const removeProductFromCart = (mas, id) => {
  let index = 0;
  mas.forEach((item, i) => {
    if (item.id === id && !!item.id) index = i;
  });
  mas.splice(index, 1);
  return mas;
};
