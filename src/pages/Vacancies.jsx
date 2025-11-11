import { RoutePageHistory } from '../components/UI/routePageHistory/RoutePageHistory';

import { Card } from '../components/UI/cards/card/Card';
import { Typography } from '../components/UI/Typography/Typography';

import '../styles/pages/Vacancies.css';
import { TelephoneLink } from '../components/UI/telephoneLink/TelephoneLink';

const vacancies = [
  {
    position: 'Веб-программист',
    requirements: 'Опыт работы с HTML, CSS, JavaScript, PHP. Знание фреймворков (Laravel, React).',
    responsibilities:
      'Разработка и поддержка веб-сайтов. Оптимизация производительности. Интеграция с базами данных.',
    terms: 'График 5/2. Удаленная работа. Современный офис в центре города.',
    tel: '+7 (495) 123-45-67',
  },
  {
    position: 'Frontend-разработчик',
    requirements:
      'Глубокое знание JavaScript, TypeScript. Опыт с React/Vue.js. Понимание принципов UI/UX.',
    responsibilities:
      'Разработка пользовательских интерфейсов. Оптимизация клиентской части приложений.',
    terms: 'Гибкий график. Курсы за счет компании. Медицинская страховка.',
    tel: '+7 (495) 234-56-78',
  },
  {
    position: 'Backend-разработчик',
    requirements:
      'Python/Django или Node.js. Опыт работы с базами данных. Знание Docker, Kubernetes.',
    responsibilities: 'Разработка серверной логики. Создание API. Оптимизация баз данных.',
    terms: 'Удаленная работа. Премии по результатам работы. Техника предоставляется.',
    tel: '+7 (495) 345-67-89',
  },
  {
    position: 'DevOps-инженер',
    requirements:
      'Опыт настройки CI/CD. Знание AWS/Azure. Администрирование Linux/Windows серверов.',
    responsibilities:
      'Развертывание и поддержка инфраструктуры. Мониторинг систем. Автоматизация процессов.',
    terms: 'Сменный график. Командировки за счет компании. Бонусы за выполнение KPI.',
    tel: '+7 (495) 456-78-90',
  },
  {
    position: 'Тестировщик ПО',
    requirements:
      'Опыт ручного/автоматического тестирования. Знание SQL. Базовые навыки программирования.',
    responsibilities:
      'Написание тест-кейсов. Регистрация дефектов. Тестирование новых функциональностей.',
    terms: 'Оформление по ТК РФ. Офис рядом с метро. Корпоративное обучение.',
    tel: '+7 (495) 567-89-01',
  },
  {
    position: 'Системный аналитик',
    requirements: 'Умение составлять ТЗ. Опыт работы с BPMN. Знание методологий разработки.',
    responsibilities:
      'Анализ бизнес-процессов. Формирование требований. Взаимодействие с командой разработки.',
    terms: 'Гибкий рабочий день. Частичная удаленка. ДМС со стоматологией.',
    tel: '+7 (495) 678-90-12',
  },
];

export const Vacancies = () => {
  return (
    <main className='container main'>
      <RoutePageHistory routes={['Главная', 'Вакансии']} />
      <Typography className='vacancies__title' as='h2' variant='header' size='xl'>
        Вакансии
      </Typography>
      <div className='vacancies__container'>
        {vacancies.map((vacancy) => (
          <Card>
            <Typography className='vacancy__item__block' as='h3' size='l' variant='text-bold'>
              {vacancy.position}
            </Typography>
            <div className='vacancy__item__block'>
              <Typography as='p' variant='text' size='m'>
                Требования
              </Typography>
              <Typography as='p' variant='text' size='s'>
                {vacancy.requirements}
              </Typography>
            </div>
            <div className='vacancy__item__block'>
              <Typography as='p' variant='text' size='m'>
                Обязанности
              </Typography>
              <Typography as='p' variant='text' size='s'>
                {vacancy.responsibilities}
              </Typography>
            </div>
            <div className='vacancy__item__block'>
              <Typography as='p' variant='text' size='m'>
                Условия
              </Typography>
              <Typography as='p' variant='text' size='s'>
                {vacancy.terms}
              </Typography>
            </div>
            <div className='vacancy__item__block'>
              <Typography as='p' variant='text' size='m'>
                Звоните
              </Typography>
              <TelephoneLink tel={vacancy.tel} />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
};
