import React from 'react'
import { Attachments } from 'core/components'

export default function QuestionForm({ title, body, handleSubmit }) {
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" defaultValue={title}/>
          <textarea name="body" defaultValue={body} />
          <Attachments />
          <input type="submit" name="submit" />
        </form>
      </div>
    )
}
