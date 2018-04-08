import React, { Component } from 'react'

import Header from 'modules/header'
import './style.css'

class App extends Component {

  render = () =>
    <div id="container">
      <Header />
      <div id="content">
        {this.props.children}
      </div>
    </div>

}


export default App
