import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer  } from 'react-router-redux'
import { routes } from '../routes';
import math from 'react-router';

import App from '../components/app';

import * as reducers from '../reducers';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store)


document.addEventListener('DOMContentLoaded', () =>
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.querySelector('#root')
  )
)
