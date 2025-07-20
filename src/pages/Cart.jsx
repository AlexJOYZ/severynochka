import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../components/UI/cards/ProductCard/ProductCard';
import { Typography } from '../components/UI/Typography/Typography';
import { Input } from '../components/UI/fields/Input/Input';
import { useState } from 'react';
import { Button } from '../components/UI/buttons/Button/Button';
import { AuthService } from '../API/entities/auth';
import { loginUser } from '../store/asyncActions/user';

export const Cart = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const cartProducts = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.account.user);

  const dispatch = useDispatch();

  const clearForm = () => setForm({ email: '', password: '' });

  const signUp = () => {
    AuthService.registration(form);
    clearForm();
  };
  const signIn = async () => {
    dispatch(loginUser(form.email, form.password));
    clearForm();
  };

  return (
    <div>
      <Input
        placeholder='email'
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <Input
        placeholder='password'
        type='password'
        value={form.password}
        onChange={(event) => setForm({ ...form, password: event.target.value })}
      />
      <Button onClick={signUp}>Зарегистрироваться</Button>
      <Button onClick={signIn}>Войти</Button>
      {user?.lastName} {user?.firstName}
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
