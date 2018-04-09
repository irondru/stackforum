import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BACKEND_PATH, ANSWERS, CREATE, UPDATE } from 'core/constants'
import { AdvTextarea, Attachments, SpinButton } from 'core/components'
import { formToJSON } from 'core'
import * as actions from '../../actions'

import './style.css'

const AnswerForm = ({ id, body, edit, question_id, user, fetching, editAnswer, createAnswer, updateAnswer }) => {
  //const {  } = this.props
  return <div className="post-layout">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={BACKEND_PATH + user.avatar_thumb} />
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
        <SpinButton spin={ (fetching ^ CREATE + UPDATE) & ANSWERS } className="btn">
          { edit ? 'Изменить' : 'Отправить' }
        </SpinButton>
      </form>
    </div>
  </div>
}

AnswerForm.PropTypes = {
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

const mapDispatchToProps = dispatch => ({
  editAnswer: id => dispatch(actions.editAnswer(id)),
  createAnswer: (event, question_id) => {
    event.preventDefault()
    formToJSON(event.target).then(res => dispatch(actions.createAnswer(res, question_id)))
  },
  updateAnswer: (event, id) => {
    event.preventDefault()
    formToJSON(event.target).then(jform => dispatch(actions.updateAnswer(jform, id)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm)
