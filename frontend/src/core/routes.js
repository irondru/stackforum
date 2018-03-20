import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Topic from 'modules/topic'
import Topics from 'modules/topics-list'
import { App } from './components'
import UserLogin from 'modules/user'
import NewOrEditQuestion from 'modules/new-or-edit-question'
import { TOPICS_PATH, SIGN_IN_PATH } from './constants'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Topics} />
    <Route path={`${TOPICS_PATH}:id`} component={Topic} />
    <Route path="/question/new" component={NewOrEditQuestion} />
    <Route path={`${TOPICS_PATH}:id/edit`} component={NewOrEditQuestion} />
    <Route path={SIGN_IN_PATH} component={UserLogin} />
  </Route>
)
