import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Checkbox } from '../../UI/checkbox/Checkbox';
import { Button } from '../../UI/buttons/Button/Button';
import { ProductCardTable } from '../../UI/cards/ProductCardTable/ProductCardTable';
import { removeManyCartAction } from '../../../store/reducers/cartReducer';

export const FillOrderDetails = ({ cartProductsUniq }) => {
  const dispatch = useDispatch();

  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);

  const deleteSelectedCartProducts = () => {
    dispatch(removeManyCartAction(selectedProductsIds));
    setSelectedProductsIds([]);
  };

  useEffect(() => {
    if (selectedProductsIds.length === cartProductsUniq.length) setIsSelectedAll(true);
  }, [selectedProductsIds, cartProductsUniq]);

  return (
    <div className='cart__step'>
      <div className='cart__btns__container'>
        <div className='cart__btn__container cart__checkbox'>
          <Checkbox
            type='unstated'
            size='l'
            label='Выделить всё'
            setValue={setIsSelectedAll}
            value={isSelectedAll}
          />
        </div>
        <div className='cart__btn__container'>
          <Button
            onClick={() => deleteSelectedCartProducts()}
            accent='primary'
            size='s'
            decoration='no'
            type='text-btn'
          >
            Удалить выбранные
          </Button>
        </div>
      </div>
      <div className='cart__table'>
        {cartProductsUniq.map((product) => (
          <ProductCardTable
            key={product.id}
            item={{
              ...product,
              isSelectedAll,
              setIsSelectedAll,
              setSelectedProductsIds,
              selectedProductsIds,
            }}
          />
        ))}
      </div>
    </div>
  );
};
