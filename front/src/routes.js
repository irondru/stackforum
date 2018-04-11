import MainLayout from './components/MainLayout'
import User from 'features/User'
import Topics from 'features/Topics'

const routes = [
  {
    path: '/',
    // exact: true,
    component: MainLayout,
    routes: [
      ...User.routes,
      ...Topics.routes,
      {
        path: '/',
        exact: true,
        component: Topics.containers.Topics
      }
    ]
  }
]

export default routes
