import { ROUTES } from './route';

import { InstagramIcon } from '../components/UI/icons/social/InstagramIcon';
import { VkIcon } from '../components/UI/icons/social/VkIcon';
import { FacebookIcon } from '../components/UI/icons/social/FacebookIcon';
import { OkIcon } from '../components/UI/icons/social/OkIcon';

export const FOOTER_LINKS = [
  {
    title: 'О компании',
    path: ROUTES.ABOUT,
  },
  {
    title: 'Контакты',
    path: ROUTES.CONTACTS,
  },
  {
    title: 'Вакансии',
    path: ROUTES.VACANCIES,
  },
  {
    title: 'Статьи',
    path: ROUTES.ARTICLES,
  },
  {
    title: 'Политика обработки персональных данных',
    path: ROUTES.POLICY,
  },
];
export const FOOTER_SOCIAL_LINKS = [
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/',
  },
  {
    icon: VkIcon,
    link: 'https://vk.com/',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/?locale=ru_RU',
  },
  {
    icon: OkIcon,
    link: 'https://ok.ru/',
  },
];
