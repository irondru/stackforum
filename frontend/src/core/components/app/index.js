import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUser } from 'modules/user/actions'
import { Header } from 'core/components'
import './style.css'

class App extends Component {

  getChildContext = () => ({
    user: this.props.user
  })

  componentDidMount = () =>
    this.props.getUser()

  render = () =>
  <div id="container">
    <Header />
    <div id="content">
      { React.cloneElement(this.props.children, { key: Math.random() } ) }
    </div>
  </div>
}

App.childContextTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
