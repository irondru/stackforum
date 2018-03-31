import React from 'react'
import PropTypes from 'prop-types'

import { BACKEND_PATH } from 'core/constants'
import { AdvTextarea, Attachments } from 'core/components'
import './style.css'

const AnswerForm = ({ id, body, edit }, context) => {
  const { updateAnswer, createAnswer, editAnswer } = context.handles
  return (
      <div className="post-layout">
        <div className="post-layout-left">
          <img alt="avatar" className="post-avatar" src={BACKEND_PATH + context.user.avatar_thumb} />
        </div>
        <div className="post-layout-right">
          <div className="post-layout-right-header answer-form">
            {
              edit ?
              <span>
                <b>Редактирование</b>
                <i className="material-icons" onClick={editAnswer.bind(null, id)}>cancel</i>
              </span>
              : <b>Ваш ответ</b>
            }
          </div>
          <form
            onSubmit={(e) => edit ? updateAnswer(e, id) : createAnswer(e)}>
            <AdvTextarea body={body} minHeight="5rem" />
            <br/>
            <Attachments />
            <input className="btn" type="submit" name="submit" />
         </form>
      </div>
    </div>
  )
}

AnswerForm.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default AnswerForm
