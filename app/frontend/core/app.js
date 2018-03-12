import React, { Component } from 'react'
import { Link } from 'react-router'

import { SIGN_IN_PATH } from 'core/constants'

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to={SIGN_IN_PATH}>Sign in</Link>
        <Link to="/question/new"> new</Link>
        {this.props.children}
      </div>
    );
  }
}
