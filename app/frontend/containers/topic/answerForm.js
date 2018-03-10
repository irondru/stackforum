import React from 'react'

export default function AnswerForm({ id, body, edit, handleSubmit }) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, id)}>
        <textarea name="body" defaultValue={body} />
        <br/>
        <input type="submit" name="Create" />
      </form>
    </div>
  )
}
