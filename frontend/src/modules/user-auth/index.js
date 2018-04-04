import React from 'react'
import { connect } from 'react-redux'
import { formToJSON } from 'core'


import * as actions from './actions'
import { Auth } from './components'
import { Modal } from 'core/components'
import './style.css'

class UserAuth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false
    }
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

  toggleModal = () =>
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })

  componentWillReceiveProps = () => {
    if (this.state.isOpenModal) this.toggleModal()
  }

  render = () => 
    <div>
      <Modal show={this.state.isOpenModal} onClose={this.toggleModal}>
        <Auth handles={this.handles} />
      </Modal>
      {
        this.props.signedIn ?
          <div className="header-btn" onClick={this.handles.signOut}>Sign out</div>
        : <div className="header-btn" onClick={this.toggleModal}>Sign in</div>
      }
   </div>

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
