import React from 'react'
import PropTypes from 'prop-types'

import { SignUpLayout, SignInLayout } from '../../components'

const SIGN_IN_TAB = 'SIGN_IN_TAB'
const SIGN_UP_TAB = 'SIGN_UP_TAB'

class AuthMainLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: SIGN_IN_TAB
    }
  }

  handleSelect = event => {
    this.setState({
      selected: event.target.id
    })
  }

  render = () => {
    const { stack } = this.props
    return (
      <div>
        <input id={SIGN_IN_TAB} type="radio" onChange={this.handleSelect} checked={this.state.selected === SIGN_IN_TAB} />
        <label htmlFor={SIGN_IN_TAB}>Вход</label>
        <input id={SIGN_UP_TAB} type="radio" onChange={this.handleSelect} checked={this.state.selected === SIGN_UP_TAB} />
        <label htmlFor={SIGN_UP_TAB}>Регистрация</label>
        <SignInLayout stack={stack} />
        <SignUpLayout stack={stack} />
      </div>
    )
  }

}

AuthMainLayout.propTypes = {
  stack: PropTypes.object.isRequired
}

export default AuthMainLayout
