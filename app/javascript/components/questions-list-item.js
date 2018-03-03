import React from 'react';

export default class QuestionListItem extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>{this.props.title}</a>
        <br />
      </div>
    )
  }
}
