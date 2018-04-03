import React from 'react'
import { connect } from 'react-redux'
import { formToJSON } from 'core'
import { modal } from 'react-redux-modal'

import * as actions from './actions'
import { ModalSignOut, ModalAuth } from './components'

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
      },
      signOut: event => {
        event.preventDefault()
        this.props.signOut()
      }
    }
  }

  authModal = () =>
    modal.add(ModalAuth, {
      title: 'Войти',
      size: 'small',
      handles: this.handles,
      closeOnOutsideClick: false,
      hideTitleBar: false,
      hideCloseButton: false,
    })

  signOutModal = () =>
    modal.add(ModalSignOut, {
      title: 'Выйти',
      size: 'small',
      handles: this.handles,
      closeOnOutsideClick: false,
      hideTitleBar: false,
      hideCloseButton: false,
   })

  componentWillReceiveProps = () => {
     modal.clear()
  }

  render = () => {
    return (
      <div>
        {
          this.props.signedIn ? <div className="header-btn" onClick={this.signOutModal}>Sign out</div>
          : <div className="header-btn" onClick={this.authModal}>Sign in</div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
    signedIn: !!state.user.payload.id
})

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(actions.signIn(user)),
    signUp: user => dispatch(actions.signUp(user)),
    signOut: () => dispatch(actions.signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
