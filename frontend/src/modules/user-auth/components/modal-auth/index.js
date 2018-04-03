import React from 'react'

import { SignInForm, SignUpForm } from '../../components'
import './style.css'

export default class ModalAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: <SignInForm handleSubmit={this.props.handles.signIn} />
    }
  }

  showSignIn = event => {
    event.target.className = 'active'
    this.refs.signUp.className = ''
    this.setState({ activeTab: <SignInForm handleSubmit={this.props.handles.signIn} /> })
  }

  showSignUp = (event) => {
    event.target.className = 'active'
    this.refs.signIn.className = ''
    this.setState({ activeTab: <SignUpForm handleSubmit={this.props.handles.signUp} /> })
  }

  render = () =>
    <div id="auth-layout">
      <div id="auth-header">
        <div ref="signIn" className="active" onClick={this.showSignIn}>Sign In</div>
        <div ref="signUp" onClick={this.showSignUp}>Sign Up</div>
      </div>
      {this.state.activeTab}
    </div>

}
