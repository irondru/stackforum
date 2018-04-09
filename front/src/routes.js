import MainLayout from './components/MainLayout'
import Test from './components/Test'
import Home from './components/home'
import About from './components/About'

const routes = [
  {
    path: '/',
    // exact: true,
    component: MainLayout,
    routes: [
      {
        path: '/test',
        component: Test
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contacts',
        component: Home
      }
    ]
  }
]

export default routes
