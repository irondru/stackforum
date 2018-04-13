import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { formToJSON } from 'features/helpers'
import * as actions from '../../actions'
import Spinner from 'components/Spinner'

class Profile extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    formToJSON(event.target)
      .then(jform => this.props.avatarUpload(jform))
  }

  render = () =>  {
    const {
      fetching, avatar_large, reg_date, name, answers_count, questions_count
    } = this.props
    return fetching ? <Spinner /> :
      <div id="profile-layout">
        <div id="profile-header"><h2>{name}</h2></div>
        <div id="profile-content">
          <img alt="Avatar" id="avatar-box" src={process.env.REACT_APP_BACK_ROOT + avatar_large} />
          <form onSubmit={this.handleSubmit}>
            <input type="file" name="image" /><br/><br/>
            <input className="btn" type="submit" value="Сохранить" />
          </form>
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
  avatarUpload: avatar => actions.profile.avatarUpload(avatar)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)