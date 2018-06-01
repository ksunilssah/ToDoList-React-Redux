import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import rootReducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleware(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));