import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Textarea, AttachmentsNew, SpinButton } from 'components'
import * as actions from '../../actions'
import * as types from '../../actionTypes'
import { createAnswerItem } from '../../models'

class AnswerNew extends React.Component {

  constructor(props) {
    super(props)
    const { model } = this.props
    this.state = {
      answer: createAnswerItem(model)
    }
    this.initState = this.state
  }

  componentWillReceiveProps(nextProps) {
    let fetching = nextProps.fetching === (types.ANSWERS_CREATE || types.ANSWERS_UPDATE)
    if (!fetching && !nextProps.errors) this.setState(this.initState)
  }

  handleChange = (propName, value) =>
    this.setState(prev => ({
      ...prev,
      answer: {
        ...prev.answer,
        [propName]: value
      }
    }))

  handleSubmit = () => {
    const { createAnswer, updateAnswer, edit } = this.props
    const { answer } = this.state
    edit ? updateAnswer(answer) : createAnswer(answer)
  }

  render = () => {
    const { user, fetching, editAnswer, edit } = this.props
    const { id, body } = this.state.answer
    return (
      <div className="post-layout">
        <div className="post-layout-left">
          <img alt="avatar" className="post-avatar" src={process.env.REACT_APP_BACK_ROOT + user.avatar_thumb} />
        </div>
        <div className="post-layout-right">
          <div className="post-layout-right-header answer-form">
            {
              edit ?
                <span>
                  <b>Редактирование</b>
                  <i className="material-icons flex-right" onClick={editAnswer.bind(null, id)}>cancel</i>
                </span>
                : <b>Ваш ответ</b>
            }
          </div>
          <div className="answer-form">
            <Textarea
              key={Math.random()}
              body={body}
              onChange={this.handleChange}
              minHeight="5rem"
            />
            <AttachmentsNew />
            <SpinButton
              spin={ fetching === (types.ANSWERS_CREATE || types.ANSWERS_UPDATE) }
              className="btn"
              onClick={this.handleSubmit}
            >
            { edit ? 'Изменить' : 'Отправить' }
            </SpinButton>
          </div>
        </div>
      </div>
    )
  }
}

AnswerNew.propTypes = {
  id: PropTypes.number,
  body: PropTypes.string,
  edit: PropTypes.bool,
  question_id: PropTypes.number
}

const mapStateToProps = state => ({
  user: state.user.payload,
  fetching: state.topic.fetching,
  errors: state.topic.errors.answer
})

const mapDispatchToProps = dispatch => {
  const { createAnswer, editAnswer, updateAnswer } = actions.answers
  return bindActionCreators({
    editAnswer,
    createAnswer,
    updateAnswer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerNew)
