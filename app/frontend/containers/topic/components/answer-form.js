import React from 'react'

export function AnswerForm({ id, body, edit, handleSubmit, handleCancelEdit }) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, id)}>
        <textarea name="body" />
        <br/>
        <input type="submit" name="Create" />
      </form>
      {handleCancelEdit ? <button onClick={handleCancelEdit.bind(null, id)}>Cancel</button> : <div/> }
    </div>
  )
}
