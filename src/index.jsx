/* eslint-disable import/no-named-as-default */
import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import App from './containers/App/App';
import './styles/main.scss';
import configureStore from './store/configureStore';
// initialize store
const store = configureStore();

moment.locale('hu');

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
