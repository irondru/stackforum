import React from 'react';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <h4>Author: {this.props.author}</h4>
        <p>body: {this.props.body}</p>
      </div>
    )
  }
}
