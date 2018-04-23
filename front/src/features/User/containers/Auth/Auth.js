import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import * as actions from '../../actions'
import { AuthMainLayout } from '../../components'
import Modal from 'components/Modal'

class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false
    }
    const { signIn, signUp, signOut } = this.props
    this.handles = {
      signIn,
      signUp,
      signOut
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
        <AuthMainLayout handles={this.handles} />
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
  errors: state.user.errors,
  fetching: state.user.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  ...actions.auth
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
