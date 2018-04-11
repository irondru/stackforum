import MainLayout from './components/MainLayout'
import Test from 'components/Test'
import User from 'features/User'

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
        component: Test
      }
    ]
  }
]

export default routes
