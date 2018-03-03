import React from 'react';

export default class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false}
  }

  formVisible = () => {
    this.setState({visible: !this.state.visible})
  }

  rendCommentField() {
    return(
      <div>
        <input type="text" />
        <button onClick={this.formVisible}>Cancel</button>
      </div>
    )
  }

  rendAddComment() {
    return(
      <div>
        <button onClick={this.formVisible}>Add Comment</button>
      </div>
    )
  }

  render() {
    if (this.state.visible) {
      return this.rendCommentField()
    } else {
      return this.rendAddComment()
    }
  }
}
