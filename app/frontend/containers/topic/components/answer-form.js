import React from 'react'

export default({ id, body, edit, handleSubmit, handleCancelEdit }) =>
    <div>
      <form onSubmit={(e) => handleSubmit(e, id)}>
        <textarea name="body" />
        <br/>
        <input type="submit" name="Create" />
        <input type="file" name="attachments" id="0" />
      </form>
      {handleCancelEdit ? <button onClick={handleCancelEdit.bind(null, id)}>Cancel</button> : <div/> }
    </div>
