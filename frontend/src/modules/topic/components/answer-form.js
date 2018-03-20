import React from 'react'
import { Attachments } from 'core/components'
import PropTypes from 'prop-types'

const AnswerForm = ({ id, body, edit }, context) => {
  const { updateAnswer, createAnswer, editAnswer } = context.handles
  return (
    <div>
      <form
      onSubmit={(e) => edit ? updateAnswer(e, id) : createAnswer(e)}>
        <textarea name="body" />
        <br/>
        <input type="submit" name="submit" />
        <Attachments />
      </form>
      {edit ? <button onClick={editAnswer.bind(null, id)}>Cancel</button> : null }
    </div>
  )
}

AnswerForm.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default AnswerForm
