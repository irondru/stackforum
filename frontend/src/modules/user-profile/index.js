import React from 'react'
import { connect } from 'react-redux'

import { formToJSON } from 'core'
import * as actions from './actions'

class UserProfile extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    formToJSON(event.target)
      .then(jform => this.props.avatarUpload(jform))
  }

  render = () =>
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="image" />
        <input type="submit" />
      </form>
    </div>
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  avatarUpload: avatar => dispatch(actions.avatarUpload(avatar))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
