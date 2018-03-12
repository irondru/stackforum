import React from 'react';

export default class Answer extends React.Component {
  render () {
    const { id, body, handleEditAnswer } = this.props
    return (
      <div>
        <p>{body}</p>
        <button onClick={handleEditAnswer.bind(null, id)}>Edit</button>
      </div>
    )
  }
}
