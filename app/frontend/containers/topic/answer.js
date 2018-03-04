import React from 'react';
import Comment from '../../components/comment';
import AddComment from '../../components/add-comment';

export default class Answer extends React.Component {
  commentsList (comments) {
    return (
      comments.map ((comment) => {
        return(
          <div>
            <Comment {...comment} />
            <AddComment />
          </div>
        )
      })
    )
  }
  render () {
    return (
      <div>
        <h3>{this.props.created_at}</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
}
