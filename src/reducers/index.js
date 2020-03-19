import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from 'reducers/phones';

export default (history) => combineReducers({
  phones,
  router: connectRouter(history),
});
