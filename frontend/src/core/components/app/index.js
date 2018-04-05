import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUser } from '../user-common/actions'
import Header from 'modules/header'
import './style.css'

class App extends Component {

  componentDidMount = () =>
    this.props.getUser()

  render = () =>
    <div id="container">
      <Header />
      <div id="content">
        { /* при изменении контекста надо пинать деток */ }
        { React.cloneElement(this.props.children, { key: Math.random() } ) }
      </div>
    </div>

  getChildContext = () => ({
    user: this.props.user
  })
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
