import React from 'react'

export default function QuestionForm({ title, body, handleSubmit }) {
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" defaultValue={title}/>
          <textarea name="body" defaultValue={body} />
          <input type="submit" name="submit" />
        </form>
      </div>
    )
}
