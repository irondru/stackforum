import React from 'react'
import { Attachments } from 'core/components'

export default({ id, body, edit, handleSubmit, handleCancelEdit }) =>
    <div>
      <form onSubmit={(e) => handleSubmit(e, id)}>
        <textarea name="body" />
        <br/>
        <input type="submit" name="submit" />
        <Attachments />
      </form>
      {handleCancelEdit ? <button onClick={handleCancelEdit.bind(null, id)}>Cancel</button> : <div/> }
    </div>
