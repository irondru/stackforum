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

  render = () =>
    <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="submit" name="submit" />
      </form>
    </div>
}

const mapStateToProps = state => {
  return {
    
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signIn: (loginData) => { dispatch(actions.signIn(loginData)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
