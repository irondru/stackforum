import MainLayout from './components/MainLayout'
import Test from 'components/Test'
import User from 'features/User'
import Topics from 'features/Topics'

const routes = [
  {
    path: '/',
    // exact: true,
    component: MainLayout,
    routes: [
      ...User.routes,
      {
        path: '/',
        exact: true,
        component: Topics.containers.Topics
      }
    ]
  }
]

export default routes
