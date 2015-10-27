import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import sessionApp from './reducers';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore);

let store = createStoreWithMiddleware(sessionApp);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
