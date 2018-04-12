import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Textarea, AttachmentsNew, SpinButton } from 'components'
import { formToJSON } from 'features/helpers'
import * as actions from '../../actions'
import * as types from '../../actionTypes'

const AnswerNew = ({ id, body, edit, question_id, user, fetching, editAnswer, createAnswer, updateAnswer }) =>
  <div className="post-layout">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={process.env.REACT_APP_BACK_ROOT + user.avatar_thumb} />
    </div>
    <div className="post-layout-right">
      <div className="post-layout-right-header answer-form">
        {
          edit ?
            <span>
              <b>Редактирование</b>
              <i className="material-icons flex-right" onClick={editAnswer.bind(null, id)}>cancel</i>
            </span>
            : <b>Ваш ответ</b>
        }
      </div>
      <form onSubmit={(e) => edit ? updateAnswer(e, id) : createAnswer(e, question_id)}>
        <AdvTextarea body={body} minHeight="5rem" />
        <Attachments />
        <SpinButton spin={ fetching === types.ANSWERS_CREATE || types.ANSWERS_UPDATE } className="btn">
          { edit ? 'Изменить' : 'Отправить' }
        </SpinButton>
      </form>
    </div>
  </div>

AnswerNew.PropTypes = {
  id: PropTypes.number,
  body: PropTypes.string,
  edit: PropTypes.bool,
  question_id: PropTypes.number
}

const mapStateToProps = state => ({
  user: state.user.payload,
  fetching: state.topic.fetching,
  errors: state.topic.errors,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  editAnswer: id => actions.answers.editAnswer(id),
  createAnswer: (event, question_id) => {
    event.preventDefault()
    formToJSON(event.target).then(res => dispatch(actions.createAnswer(res, question_id)))
  },
  updateAnswer: (event, id) => {
    event.preventDefault()
    formToJSON(event.target).then(jform => dispatch(actions.updateAnswer(jform, id)))
  }
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AnswerNew)
