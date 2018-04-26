import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { base64Loader } from 'features/utils'
import * as actions from '../../actions'
import { Spinner, SpinButton } from 'components'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: {}
    }
  }

  handleChange = event => {
    const { name, files } = event.target
    this.setState(prev => ({
      ...prev,
      avatar: {
        [name]: files[0]
      }
    }))
  }

  handleSubmit = () => {
    const { avatar } = this.state
    const { avatarUpload } = this.props
    console.log(avatar);
    base64Loader([avatar.image])
    .then(image => {
      avatar.image = image
      avatarUpload(avatar)
    })
  }

  render = () =>  {
    const {
      fetching, avatar_large, reg_date, name, answers_count, questions_count
    } = this.props
    return fetching ? <Spinner /> :
      <div id="profile-layout">
        <div id="profile-header"><h2>{name}</h2></div>
        <div id="profile-content">
          <img
            alt="Avatar"
            id="avatar-box"
            src={process.env.REACT_APP_BACK_ROOT + avatar_large}
          />
          <input
            onChange={this.handleChange}
            type="file"
            name="image"
          />
          <SpinButton
            onClick={this.handleSubmit}
            className="btn"
            spin={!!fetching}
          >
            Сохранить
          </SpinButton>
          <div id="more-info">
            <span>Дата регистрации: {reg_date}</span><br/>
            <span>Вопросов: {questions_count}</span><br/>
            <span>Ответов: {answers_count}</span><br/>
          </div>
        </div>
      </div>
  }
}

Profile.propTypes = {
  avatar_large: PropTypes.string,
  reg_date: PropTypes.string,
  name: PropTypes.string,
  answers_count: PropTypes.number,
  questions_count: PropTypes.number
}

const mapStateToProps = state => ({
  ...state.user.payload,
  fetching: state.user.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  ...actions.profile
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
