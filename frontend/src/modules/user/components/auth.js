import React from 'react'

import { SignInForm, SignUpForm } from '../components'

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: <SignInForm handleSubmit={this.props.handles.signIn} />
    }
  }

  showSignIn = () =>
    this.setState({ activeTab: <SignInForm handleSubmit={this.props.handles.signIn} /> })

  showSignUp = () =>
    this.setState({ activeTab: <SignUpForm handleSubmit={this.props.handles.signUp} /> })

  render = () =>
    <div>
      <div onClick={this.showSignIn}>Sign In</div>
      <div onClick={this.showSignUp}>Sign Up</div>
      {this.state.activeTab}
    </div>

}
