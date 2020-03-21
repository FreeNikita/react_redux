import Phones from 'pages/phones';
import Phone from 'pages/phone';

export const URL_PAGE_HOME = '/';
export const URL_PAGE_BY_ID = '/phones/:id';

export const routing = [
  {
    url: URL_PAGE_HOME,
    component: Phones,
    exact: true,
  },
  {
    url: URL_PAGE_BY_ID,
    component: Phone,
    exact: false,
  },
];
