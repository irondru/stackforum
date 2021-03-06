import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../Header'

const MainLayout = ({ route }) => (

  <div id="container">
  <Header />
  <div id="content">
    {route && renderRoutes(route.routes)}
  </div>
  </div>
)

export default MainLayout
