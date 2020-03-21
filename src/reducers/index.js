import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from 'reducers/phones';
import phonesPage from 'reducers/phonesPage';
import phonePage from 'reducers/phonePage';
import basket from 'reducers/basket';
import categories from 'reducers/categories';

export default (history) => combineReducers({
  router: connectRouter(history),
  phones,
  phonesPage,
  phonePage,
  basket,
  categories,
});
