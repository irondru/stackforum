// @flow
import { Topics, TopicsNew } from './containers'

export const QUESTIONS           = '/questions/'
export const QUESTION_NEW        = '/question/new'
export const QUESTIONS_SEARCH    = '/search'

const routes = [
  {
    path: QUESTIONS_SEARCH,
    component: Topics
  },
  {
    path: QUESTION_NEW,
    component: TopicsNew
  }
]

export default routes
