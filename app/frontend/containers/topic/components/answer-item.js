import React from 'react';

export default ({ id, body, handleEditAnswer }) =>
      <div>
        <p>{body}</p>
        <button onClick={handleEditAnswer.bind(null, id)}>Edit</button>
      </div>
