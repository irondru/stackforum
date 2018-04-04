import React from 'react'
import PropTypes from 'prop-types'

import { AdvTextarea } from 'core/components'
import './style.css'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: props.edit,
    }
  }

  formVisible = () => {
    if (this.state.visible) this.context.handles.editComment(this.props.id)
    this.setState({
      visible: !this.state.visible
    })
  }

  render = () => {
    const { body, id, commentableId, commentableType, edit } = this.props
    const { updateComment, createComment } = this.context.handles
    return (
      <div>
        {
          this.state.visible ?
            <div className="comment-form-layout">
              <div className="comment-form-header">
                <span>New comment</span>
                <i onClick={this.formVisible} className="material-icons">cancel</i>
              </div>
              <form
                onSubmit={(e) => edit ? updateComment(e, id)
                  : createComment(e, commentableType, commentableId, id)}>
                <AdvTextarea body={body} />
                <input className="btn" type="submit" />
              </form>
            </div>
          :
          <div className="add-comment pointer" onClick={this.formVisible}>Add Comment</div>
        }
      </div>
    )
  }
}

CommentForm.propTypes = {
  body: PropTypes.string,
  id: PropTypes.number,
  commentableId: PropTypes.number,
  commentableType: PropTypes.number.isRequired,
  edit: PropTypes.bool
}

CommentForm.contextTypes = {
  handles: PropTypes.object.isRequired
}

export default CommentForm
