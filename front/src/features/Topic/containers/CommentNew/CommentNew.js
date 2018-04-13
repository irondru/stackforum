import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { formToJSON } from 'features/helpers'
import { Textarea, SpinButton } from 'components'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: props.edit,
    }
    this.baseState = this.state
  }

  //componentWillReceiveProps(nextProps) {
  //  let fetching = nextProps.fetching ^ COMMENTS
  //  fetching = fetching === CREATE || fetching === UPDATE
  //  const errors = nextProps.errors
  //  //this.setState ({ fetching })
    //if (!fetching && errors) this.setState({ errors })
  //  if (!fetching && !errors) this.setState(this.baseState)
  //}

  formVisible = () => {
    if (this.state.visible) this.props.editComment(this.props.id)
    this.setState({
      visible: !this.state.visible
    })
  }

  render = () => {
    const { body, id, fetching, errors, updateComment, createComment, commentableId, commentableType, edit } = this.props
    return (
      <div>
        {
          this.state.visible ?
            <div className="comment-form-layout">
              <div className="comment-form-header">
                <span>New comment</span>
                <i onClick={this.formVisible} className="material-icons">cancel</i>
              </div>
              <form onSubmit={(e) => edit ? updateComment(e, id)
                  : createComment(e, commentableType, commentableId, id)}>
                <Textarea body={body} />
                <SpinButton spin={fetching} className="btn">
                  { edit ? 'Изменить' : 'Отправить' }
                </SpinButton>
              </form>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  createComment: (event, commentableType, commentableId) => {
    event.preventDefault()
    formToJSON(event.target)
      .then(jform => actions.comments.createComment(jform, commentableType, commentableId))
  },
  updateComment: (event, id) => {
    event.preventDefault()
    formToJSON(event.target)
     .then(jform => actions.comments.updateComment(jform, id))
  }
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)