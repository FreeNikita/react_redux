import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from 'reducers/phones';
import phonesPage from 'reducers/phonesPage';
import phonePage from 'reducers/phonePage';

export default (history) => combineReducers({
  router: connectRouter(history),
  phones,
  phonesPage,
  phonePage,
});
