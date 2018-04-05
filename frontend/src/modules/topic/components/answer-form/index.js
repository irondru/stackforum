import React from 'react'
import PropTypes from 'prop-types'

import { BACKEND_PATH, ANSWERS, CREATE, UPDATE } from 'core/constants'
import { AdvTextarea, Attachments, SpinButton } from 'core/components'
import './style.css'

const AnswerForm = ({ id, body, edit },
  { user, fetching, handles: { updateAnswer, createAnswer, editAnswer } }) =>
  <div className="post-layout">
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
      <form onSubmit={(e) => edit ? updateAnswer(e, id) : createAnswer(e)}>
        <AdvTextarea body={body} minHeight="5rem" />
        <Attachments />
        <SpinButton spin={ (fetching ^ ANSWERS) & CREATE + UPDATE } className="btn">
          { edit ? 'Изменить' : 'Отправить' }
        </SpinButton>
      </form>
    </div>
  </div>

AnswerForm.PropTypes = {
  id: PropTypes.number,
  body: PropTypes.string,
  edit: PropTypes.bool
}

AnswerForm.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  fetching: PropTypes.number.isRequired
}

export default AnswerForm
