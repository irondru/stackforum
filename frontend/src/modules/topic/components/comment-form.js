import React from 'react'
import PropTypes from 'prop-types'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: props.edit }
  }

  formVisible = () => this.setState({ visible: !this.state.visible })

  render = () => {
    const { body, id, commentableId, commentableType, edit } = this.props
    const { updateComment, createComment } = this.context.handles
    return (
      <div>
        {
          this.state.visible ?
            <form
              onSubmit={(e) => edit ? updateComment(e, id)
                : createComment(e, commentableType, commentableId, id)}>
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

CommentForm.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentForm
