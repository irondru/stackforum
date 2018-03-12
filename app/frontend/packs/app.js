import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from 'core';

import configureStore from 'core/store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


document.addEventListener('DOMContentLoaded', () =>
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.querySelector('#root')
  )
)
