import React from 'react'
import { connect } from 'react-redux'
import { formToJSON } from 'core'

import * as actions from './actions'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'

class UserLogin extends React.Component {

  handleSignIn = event => {
    event.preventDefault()
    formToJSON(event.target)
    .then(jform => this.props.signIn(jform))
  }

  handleSignUp = event => {
    event.preventDefault()
    formToJSON(event.target)
      .then(jform => this.props.signUp(jform))
  }

  componentDidMount = () => this.props.getUser()

  render() {
  if (this.props.payload.id) {
    return (
      <div>
      <h1>{this.props.payload.email}</h1>
      <button onClick={this.props.signOut}>pij</button>
      </div>
    )
  } else {
    return (
    <SignUp handleSubmit={this.handleSignUp} />
  )
  }
}
}

const mapStateToProps = state => ({
    ...state.user
})


const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(actions.signIn(user)),
    signUp: user => dispatch(actions.signUp(user)),
    signOut: () => dispatch(actions.signOut()),
    getUser: () => dispatch(actions.getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
