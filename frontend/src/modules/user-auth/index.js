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

  componentDidMount = () =>
      this.props.getUser()

  componentWillReceiveProps = nextProps => {
    if (this.state.isOpenModal) this.toggleModal()
  }

  toggleModal = () =>
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })

  render = () =>
    <div>
      <Modal show={this.state.isOpenModal} onClose={this.toggleModal}>
        <Auth handles={this.handles} />
        {
          this.props.errors ?
          <p>{this.props.errors.msg}</p>
          : null
        }
      </Modal>
      {
        this.props.signedIn ?
          <div className="header-btn" onClick={this.handles.signOut}>Sign out</div>
        : <div className="header-btn" onClick={this.toggleModal}>Sign in</div>
      }
   </div>

}

const mapStateToProps = state => ({
    signedIn: !!state.user.payload.id,
    errors: state.user.errors
})

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(actions.signIn(user)),
    signUp: user => dispatch(actions.signUp(user)),
    signOut: () => dispatch(actions.signOut()),
    getUser: () => dispatch(actions.getUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
