import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createRootReducer from 'reducers';

import Route from 'components/route';
import './main.css';


const history = createBrowserHistory();
const middleWares = [thunk, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middleWares)),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
