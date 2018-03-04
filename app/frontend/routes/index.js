import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Topic from '../containers/topic';
import App from '../components/app';

const
    getTopics = (nextState, callback) => require.ensure(
        [],
        (require) => {
            callback(null, require("../containers/topics").default)
        }
    );

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute getComponent={getTopics} />
    <Route path='/topics/:id' component={Topic} />
  </Route>
)
