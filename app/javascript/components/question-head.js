import React from 'react';

export default class QuestionHead extends React.Component {
  render() {
    return (
      <div>
        <h3>Author {this.props.question.author}</h3>
        <p>Body {this.props.question.body}</p>
      </div>
    )
  }
}
