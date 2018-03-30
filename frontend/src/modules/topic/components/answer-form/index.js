import React from 'react'
import { Attachments } from 'core/components'
import PropTypes from 'prop-types'

import { AdvTextarea } from 'core/components'
import './style.css'

const AnswerForm = ({ id, body, edit }, context) => {
  const { updateAnswer, createAnswer, editAnswer } = context.handles
  return (
      <div className="answer-form-layout">
        <div className="answer-form-header">
          <span>New answer</span>
          {
            edit ?
            <i className="material-icons" onClick={editAnswer.bind(null, id)}>cancel</i>
            : null
          }
        </div>
        <form
          onSubmit={(e) => edit ? updateAnswer(e, id) : createAnswer(e)}>
          <AdvTextarea body={body} minHeight="5rem" />
          <br/>
          <input className="btn" type="submit" name="submit" />
          <Attachments />
        </form>
      </div>
  )
}

AnswerForm.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default AnswerForm
