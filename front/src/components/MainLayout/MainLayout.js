import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

const MainLayout = ({ route }) => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Test">Test</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
    <div>
      {route && renderRoutes(route.routes)}
    </div>
  </div>
)

export default MainLayout
