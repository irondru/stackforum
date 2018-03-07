import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import FormLogin from './formLogin'

class UserLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit = event => {
    event.preventDefault();
    let loginData = {}
    Array.from(event.target).forEach(field => loginData[field.name] = field.value)
    this.props.signIn(loginData);
  }

  componentDidMount = () => this.props.getProfile()

  click () {
    alert('lol')
  }

  render() {
    if (this.props.fetching) return (
      <h1>Loading...</h1>
    )
  if (this.props.profile) {
    return (
      <div>
      <h1>{this.props.profile.email}</h1>
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
