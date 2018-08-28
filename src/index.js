import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import { App } from './containers';
import configureStore from './config/store';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
