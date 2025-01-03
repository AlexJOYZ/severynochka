import { removeProductFromCart } from './removeProductFromCart';

const mas = [
  { title: 'example', id: 1 },
  { title: 'example', id: 1 },
  { title: 'example', id: 2 },
];
const expectedMas = [
  { title: 'example', id: 1 },
  { title: 'example', id: 2 },
];

describe('removeProductFromCart', () => {
  test('Корректное значение', () => {
    expect(removeProductFromCart(mas, 1)).toEqual(expectedMas);
  });
  test('Некорректное значение', () => {
    expect(removeProductFromCart(mas, 2)).not.toEqual(expectedMas);
  });
  test('Пустой массив', () => {
    expect(removeProductFromCart([], 2)).toEqual([]);
  });
  test('Массив чисел вместо объектов', () => {
    expect(removeProductFromCart([1,2,3], 1)).toEqual([2,3]);
  });
});
