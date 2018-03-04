import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Topic from '../containers/topic';
import Topics from '../containers/topics';
import App from '../components/app';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Topics} />
    <Route path='/topics/:id' component={Topic} />
  </Route>
)
