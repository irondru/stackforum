import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class UserLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit = event => {
    event.preventDefault();
    let loginData = {}
    Array.from(event.target).forEach(field => loginData[field.name] = field.value)
    this.props.signIn(loginData);
  }

  componentDidMount = () => this.props.getProfile()

  render = () =>
    <div>
      <br/>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="submit" name="submit" />
      </form>
    </div>
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signIn: (loginData) => { dispatch(actions.signIn(loginData)) },
    signOut: () => { dispatch(actions.signOut()) },
    getProfile: () => { dispatch(actions.getProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
