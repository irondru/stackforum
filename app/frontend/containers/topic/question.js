import React from 'react';

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <h3>created_at: {this.props.created_at}</h3>
        <p>Body {this.props.body}</p>
      </div>
    )
  }
}
