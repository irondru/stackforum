import React from 'react'
import { connect } from 'react-redux'
import { formToJSON } from '../helpers'
import { bindActionCreators } from 'redux'


import * as actions from './actions'
import { Auth } from './components'
import Modal from '../../components/Modal'
import './UserAuth.css'

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

const mapDispatchToProps = dispatch => bindActionCreators ({
  signIn: user => actions.signIn(user),
  signUp: user => actions.signUp(user),
  signOut: () => actions.signOut(),
  getUser: () => actions.getUser()
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuth);
