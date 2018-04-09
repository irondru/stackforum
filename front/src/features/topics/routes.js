// @flow
import containers from './containers'

const routes = [
  {
    path: '/topics/new',
    component: containers.SupplementNew
  },
  {
    path: '/topics/:id',
    component: containers.SupplementDetails
  },
  {
    path: '/topics',
    component: containers.SupplementList
  }
]

export default routes
