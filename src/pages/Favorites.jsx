import { MainContainer } from '../components/Layout/MainContainer/MainContainer';

export const Favorites = () => {
  return (
    <MainContainer routes={['Главная', 'Избраное']}>
      <div>Избраное</div>
    </MainContainer>
  );
};
