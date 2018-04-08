import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Topic from 'modules/topic'
import Topics from 'modules/topics-list'
import { App } from './components'
import NewOrEditQuestion from 'modules/new-or-edit-question'
import UserProfile from 'modules/user-profile'
import { TOPIC_SHOW, QUESTION_NEW, QUESTION_EDIT, USER_PROFILE, SEARCH } from './constants'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Topics} />
    <Route path={TOPIC_SHOW} component={Topic} />
    <Route path={QUESTION_NEW} component={NewOrEditQuestion} />
    <Route path={QUESTION_EDIT} component={NewOrEditQuestion} />
    <Route path={USER_PROFILE} component={UserProfile} />
    <Route path={SEARCH} component={Topics} />
  </Route>
)
