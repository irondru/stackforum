import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { Textarea, SpinButton } from 'components'
import { createCommentItem } from '../../models'
import * as types from '../../actionTypes'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    const { model } = this.props
    this.state = {
      visible: model.edit,
      comment: createCommentItem(model)
    }
    this.initState = this.state
  }

  componentWillReceiveProps(nextProps) {
    let fetching = (nextProps.fetching === types.COMMENTS_CREATE || nextProps.fetching === types.COMMENTS_UPDATE)
    if (!fetching && !nextProps.errors) this.setState(this.initState)
  }

  formVisible = () => {
    if (this.state.visible) this.props.editComment(this.props.id)
    this.setState({
      visible: !this.state.visible
    })
  }

  handleChange = (propName, value) =>
    this.setState(prev => ({
      ...prev,
      comment: {
        ...prev.comment,
        [propName]: value
      }
    }))

  handleSubmit = () => {
    const { updateComment, createComment } = this.props
    const { edit } = this.props.model
    const { comment } = this.state
    edit ? updateComment(comment) : createComment (comment)
  }

  render = () => {
    const { fetching, errors } = this.props
    const { edit } = this.props.model
    const { body } = this.state.comment
    return (
      <div>
        {
          this.state.visible ?
            <div className="comment-form-layout">
              <div className="comment-form-header">
                <span>New comment</span>
                <i onClick={this.formVisible} className="material-icons">cancel</i>
              </div>
              <div className="comment-form">
                <Textarea
                  body={body}
                  key={Math.random()}
                  onChange={this.handleChange}
                />
                <SpinButton
                  spin={fetching === (types.COMMENTS_CREATE || types.COMMENTS_UPDATE)}
                  className="btn" onClick={this.handleSubmit}
                >
                  { edit ? 'Изменить' : 'Отправить' }
                </SpinButton>
              </div>
              { errors ? <p>{errors.body}</p> : null }
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
  commentableType: PropTypes.string,
  edit: PropTypes.bool
}

const mapStateToProps = state => ({
  fetching: state.topic.fetching,
  errors: state.topic.errors.comment
})

const mapDispatchToProps = dispatch => {
  const { createComment, updateComment, editComment } = actions.comments
  return bindActionCreators({
    createComment,
    updateComment,
    editComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
