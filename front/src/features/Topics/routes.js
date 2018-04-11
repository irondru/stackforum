// @flow
import { Topics } from './containers'

export const QUESTIONS           = '/questions/'
export const QUESTIONS_SEARCH    = '/search'

const routes = [
  {
    path: QUESTIONS_SEARCH,
    component: Topics
  }
]

export default routes
