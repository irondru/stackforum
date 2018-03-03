import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Question from './containers/question';
import Questions from './containers/questions';
import App from './components/app';
import Home from './components/home';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Questions} />
    <Route path='/question' component={Question} />
  </Route>
)
