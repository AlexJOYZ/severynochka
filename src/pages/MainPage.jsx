import '../styles/pages/MainPAge.css';

import { Banner } from '../components/UI/banner/Banner';
import { SectionProducts } from '../components/Layout/SectionProducts/SectionProducts';

export const MainPage = () => {
  const sectionNew = {
    title: 'Акции',
    titleBtn: 'акции',
    products: [
      {
        title: 'Молоко',
        id: 1,
      },
    ],
  };
  return (
    <main>
      <Banner />
      <div className='container main__content'>
        <div className='container__inner'>
          <SectionProducts productSection={sectionNew} />
        </div>
      </div>
    </main>
  );
};
