import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHover } from '../../../../hooks/useHover';

import { addCartAction, removeCartAction } from '../../../../store/reducers/cartReducer';

import { classNames } from '../../../../utils/helpers/classNames/classNames';

import { IconButton } from '../../buttons/IconButton/IconButton';
import { Checkbox } from '../../checkbox/Checkbox';
import { MinusIconBtn } from '../../icons/card/MinusIconBtn';
import { PlusIconBtn } from '../../icons/card/PlusIconBtn';
import { Notice } from '../../notice/Notice';
import { Typography } from '../../Typography/Typography';

import cardStyles from '../card.module.css';
import cl from './ProductCardTable.module.css';

export const ProductCardTable = ({ item }) => {
  const [isSelected, setIsSelected] = useState(item.isSelectedAll);
  const itemRef = useRef();

  const dispatch = useDispatch();
  const countProduct = useSelector(
    (state) => state.cart.items.filter((product) => product.id === item.id).length,
  );

  const isItemHovering = useHover(itemRef);

  const itemPriceWithDiscount = (item.price - item.price * (item.discount / 100)).toFixed(2);

  const addProductInCart = () => {
    dispatch(addCartAction(item));
  };

  const removeProductInCart = () => {
    dispatch(removeCartAction(item.id));
  };

  useEffect(() => {
    if (item.isSelectedAll) {
      setIsSelected(true);
      item.setSelectedProductsIds((mas) => [...mas, item.id]);
    }
  }, [item.isSelectedAll]);

  return (
    <article
      ref={itemRef}
      className={classNames(
        cardStyles.card,
        cl.card__table,
        isItemHovering ? cardStyles.card__active : '',
        item.discount ? '' : cl.card__prod,
      )}
    >
      <div className={cl.card__left}>
        <div className={cl.card__img__container}>
          <img className={cl.card__img} src={item.imgUrl} />
          <Checkbox
            className={cl.card__img__checkbox}
            value={isSelected}
            setValue={(value) => {
              if (!value) item.setIsSelectedAll(false);
              else item.setSelectedProductsIds([...item.selectedProductsIds, item.id]);
              setIsSelected(value);
            }}
            size='l'
          />
        </div>

        <div className={cl.card__text}>
          <Typography variant='text' as='p' size='s'>
            {item.title}
          </Typography>

          <div className={cl.price__container}>
            <div className={cl.price__without__discount}>
              <Typography
                className={cl.price__without__discount__number}
                as='p'
                variant='text-bold'
                size='s'
              >
                {itemPriceWithDiscount} ₽
              </Typography>
              <Typography className={cl.price__discount__text} as='p' variant='text' size='xs'>
                С картой
              </Typography>
            </div>
            <div className={cl.price__with__discount}>
              <Typography
                className={cl.price__without__discount__number}
                as='p'
                variant='text'
                size='s'
              >
                {item.price.toFixed(2)} ₽
              </Typography>
              <Typography className={cl.price__discount__text} as='p' variant='text' size='xs'>
                Обычная
              </Typography>
            </div>

            <Typography as='span' variant='text' size='s'>
              за шт.
            </Typography>

            <Notice accent='primary' size='m' className={cl.notice}>
              -{item.discount}%
            </Notice>
          </div>
        </div>
      </div>
      <div className={cl.card__right}>
        <div className={classNames(cl.card__table__button)}>
          <IconButton
            position='both'
            IconLeft={MinusIconBtn}
            leftClick={removeProductInCart}
            rightClick={addProductInCart}
            IconRight={PlusIconBtn}
            size='m'
            decoration='default'
            accent='secondary'
          >
            {countProduct}
          </IconButton>
        </div>
        <div className={cl.card__table__total__price}>
          <Typography as='p' variant='text-bold' size='m'>
            {(countProduct * itemPriceWithDiscount).toFixed(2)} ₽
          </Typography>
          <Typography className={cl.total__price__without__discount} as='p' variant='text' size='s'>
            {(countProduct * item.price).toFixed(2)} ₽
          </Typography>
        </div>
      </div>
    </article>
  );
};
