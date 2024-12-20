import '../styles/pages/MainPAge.css'

import { Banner } from '../components/UI/banner/Banner';
import { Typography } from '../components/UI/Typography/Typography';

export const MainPage = () => {
  return (
    <main>
      <Banner />
      <div className="container main__content">
        <Typography as='p' size='s' type='text'>ddjdj</Typography>
      </div>
    </main>
  );
};
