import React from 'react'
import { connect } from 'react-redux'
import { formToJSON } from 'core'
import { modal } from 'react-redux-modal'

import * as actions from './actions'
import { Auth } from './components'

class UserAuth extends React.Component {

  constructor(props) {
    super(props)
    this.handles = {
      signIn: event => {
        event.preventDefault()
        formToJSON(event.target)
          .then(jform => this.props.signIn(jform))
      },
      signUp: event => {
        event.preventDefault()
        formToJSON(event.target)
          .then(jform => this.props.signUp(jform))
      }
    }
  }

  authModal = () =>
    modal.add(Auth, {
      title: 'This is my modal',
      size: 'medium',
      handles: this.handles,
      closeOnOutsideClick: false,
      hideTitleBar: false,
      hideCloseButton: false,
    })

  componentWillReceiveProps = (newProps) => {
    if (newProps.signedIn) modal.clear()
  }

  render = () => {
    const { signedIn, signOut } = this.props
    return (
      <div>
        {
          signedIn ? <div className="header-btn" onClick={signOut}>Sign out</div>
          : <div className="header-btn" onClick={this.authModal}>Sign in</div>
        }
      </div>
    )
  }

}


const mapStateToProps = state => ({
    ...state.user,
    signedIn: !!state.user.payload.id
})


const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(actions.signIn(user)),
    signUp: user => dispatch(actions.signUp(user)),
    signOut: () => dispatch(actions.signOut()),
    getUser: () => dispatch(actions.getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
