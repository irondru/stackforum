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
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1">Codepen</label>
    <input id="tab2" type="radio" name="tabs">
    <label for="tab2">Dribbble</label>

    <section id="content1">
      <SignInForm />
    </section>

  <section id="content2">
    <SignUpForm />
  </section>
    </div>

}
