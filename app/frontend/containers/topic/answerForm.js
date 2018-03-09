import React from 'react'

export default function AnswerForm({ body, edit, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea name="body" defaultValue={body} />
        <br/>
        <input type="submit" name="Create" />
      </form>
    </div>
  )
}
