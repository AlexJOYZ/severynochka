import { useSelector } from 'react-redux';
import { ProductCard } from '../components/UI/cards/ProductCard/ProductCard';
import { Typography } from '../components/UI/Typography/Typography';

export const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.items);
  
  return (
    <div>
      Cart
      {cartProducts.length !== 0 ? (
        cartProducts.map((product) => <ProductCard item={product} />)
      ) : (
        <Typography type='header' as='h2' size='m'>
          Корзина пуста
        </Typography>
      )}
    </div>
  );
};
