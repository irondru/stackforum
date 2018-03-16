import React from 'react'
import { connect } from 'react-redux'
import { parseForm } from 'core'

import * as actions from './actions'
import FormLogin from './components/form-login'

class UserLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.signIn(parseForm(event.target));
  }

  componentDidMount = () => this.props.getProfile()

  click () {
    alert('lol')
  }

  render() {
    if (this.props.fetching) return (
      <h1>Loading...</h1>
    )
  if (this.props.payload.id) {
    return (
      <div>
      <h1>{this.props.payload.email}</h1>
      <button onClick={this.props.signOut}>pij</button>
      </div>
    )
  } else {
    return (
    <FormLogin onSubmit={this.onSubmit} />
  )
  }
}
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signIn: (loginData) => { dispatch(actions.signIn(loginData)) },
    signOut: () => { dispatch(actions.signOut()) },
    getProfile: () => { dispatch(actions.getProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
