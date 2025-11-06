import { RoutePageHistory } from '../components/UI/routePageHistory/RoutePageHistory';
import { Typography } from '../components/UI/Typography/Typography';

export const Vacancies = () => {
  return (
    <main className='container main'>
      <RoutePageHistory routes={['Главная', 'Вакансии']} />
      <Typography className='vacancies__title' as='h2' variant='header' size='xl'>
        Вакансии
      </Typography>
      <div className="vacancies__container">
        <Card className="vacancies__container__item"></Card>
        <div className="vacancies__container__item"></div>
        <div className="vacancies__container__item"></div>
        <div className="vacancies__container__item"></div>
        <div className="vacancies__container__item"></div>
        <div className="vacancies__container__item"></div>
      </div>
    </main>
  );
};
