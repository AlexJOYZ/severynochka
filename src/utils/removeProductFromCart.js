export const removeProductFromCart = (mas, id=0) => {
  let index;
  mas.forEach((item, i) => {
    if (item.id === id) index = i;
  });
  mas.splice(index, 1);
  return mas;
};
console.log(removeProductFromCart([],0))
