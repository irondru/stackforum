import React from 'react';

export default class Question extends React.Component {

  onClick = () => {
    this.props.editQuestion(this.props)
  }

  render() {
    return (
      <div>
        <h3>created_at: {this.props.created_at}</h3>
        <p>Body {this.props.body}</p>
        <button onClick={this.onClick}>Edit</button>
      </div>
    )
  }
}
