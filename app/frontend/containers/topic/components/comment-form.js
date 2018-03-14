import React from 'react'

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: props.edit }
  }

  formVisible = () => this.setState({ visible: !this.state.visible })

  render = () => {
    const { body, id, commentableId, commentableType, edit,
      handles: { updateComment, createComment } } = this.props
    const handleSubmit = edit ? updateComment : createComment
    return (
    <div>
      {
        this.state.visible ?
          <form onSubmit={(e) => handleSubmit(e, commentableType, commentableId, id)}>
            <input type="text" defaultValue={body} name="body" />
            <input type="submit" />
          </form>
        : null
      }
      <button onClick={this.formVisible}>{this.state.visible ? 'Cancel' : 'Add Comment'}</button>
    </div>
  )
  }
}
