import React from 'react';
import Comment from './comment';
import AddComment from './add-comment';

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
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        {this.commentsList(this.props.comments)}
      </div>
    )
  }
}
