import React from 'react'
import { Attachments, AdvTextarea } from 'core/components'
import PropTypes from 'prop-types'

import { BACKEND_PATH } from 'core/constants'
import './style.css'

const QuestionForm = ({ title, body, handleSubmit }, context ) =>
  <div className="post-layout new-question-container">
    <div className="post-layout-left">
      <img alt="avatar" className="post-avatar" src={BACKEND_PATH + context.user.avatar_thumb} />
    </div>
    <div className="post-layout-right">
      <div className="post-layout-right-header">
        <h4>Новый вопрос</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <p>Заголовок</p>
        <AdvTextarea body={title} name="title" />
        <br/>
        <p>Содержание</p>
        <AdvTextarea body={body} minHeight="10rem" />
        <Attachments />
        <input className="btn" type="submit" name="submit" />
      </form>
    </div>
  </div>

QuestionForm.contextTypes = {
  user: PropTypes.object.isRequired
}

export default QuestionForm
