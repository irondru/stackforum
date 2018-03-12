import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Topic from 'containers/topic'
import Topics from 'containers/topics-list'
import App from 'components/app'
import UserLogin from 'containers/user'
import NewOrEditQuestion from 'containers/new-or-edit-question'
import { TOPICS_PATH, SIGN_IN_PATH } from 'core/constants'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Topics} />
    <Route path={`${TOPICS_PATH}:id`} component={Topic} />
    <Route path="/question/new" component={NewOrEditQuestion} />
    <Route path={`${TOPICS_PATH}:id/edit`} component={NewOrEditQuestion} />
    <Route path={SIGN_IN_PATH} component={UserLogin} />
  </Route>
)
