import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from 'reducers/phones';
import phonesPage from 'reducers/phonesPage';

export default (history) => combineReducers({
  router: connectRouter(history),
  phones,
  phonesPage,
});
