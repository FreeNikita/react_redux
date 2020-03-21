import Phones from 'pages/phones';
import Phone from 'pages/phone';
import Basket from 'pages/basket';

export const URL_PAGE_HOME = '/';
export const URL_PAGE_PHONE_BY_ID = '/phones/:id';
export const URL_PAGE_PHONE_BY_CATEGORIES = '/categories/:id';
export const URL_PAGE_BASKET = '/basket';

export const routing = [
  {
    url: URL_PAGE_HOME,
    component: Phones,
    exact: true,
  },
  {
    url: URL_PAGE_PHONE_BY_ID,
    component: Phone,
    exact: false,
  },
  {
    url: URL_PAGE_PHONE_BY_CATEGORIES,
    component: Phones,
    exact: false,
  },
  {
    url: URL_PAGE_BASKET,
    component: Basket,
    exact: false,
  },
];
