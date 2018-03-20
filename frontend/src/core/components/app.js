import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SIGN_IN_PATH, USER_CAN_CREATE_QUESTION } from 'core/constants'
import { getUser } from 'modules/user/actions'

class App extends Component {

  getChildContext = () => ({
    user: this.props.user
  })

  componentDidMount = () =>
    this.props.getUser()

  render() {
    return (
      <div>
        <Link to={SIGN_IN_PATH}>Sign in</Link>
        {
          this.props.user.abilities & USER_CAN_CREATE_QUESTION ?
            <Link to="/question/new">New Question</Link> : null
        }
        {this.props.children}
      </div>
    );
  }

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
