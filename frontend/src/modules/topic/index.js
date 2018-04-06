import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import * as actions from './actions'

import { AnswerForm, Question, AnswerItem } from './components'
import { Spinner } from 'core/components'
import { formToJSON } from 'core'
import { USER_CAN_CREATE_ANSWER, QUESTIONS, SHOW } from 'core/constants'
import './style.css'

class Topic extends React.Component {

  componentDidMount = () => {
    const { fetching, getTopic, params: {id} } = this.props
    if (!fetching) getTopic(id) //что бы не дергало 2 раза подряд
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deleted) browserHistory.push('/')
  }

  answersList = () =>
    this.props.answers ? this.props.answers.map(answer =>
      answer.edit ? <AnswerForm key={answer.id} {...answer} /> :
        <AnswerItem key={answer.id} {...answer} itsMyTopic={this.props.question.access} />
   ) : null

  render = () => {
    const { fetching, question } = this.props
    const { abilities } = this.context.user
    return fetching === QUESTIONS + SHOW || !question ? <Spinner />
    :
    <div className="topic-layout">
      <Question {...question} />
      {this.answersList()}
      {
        abilities & USER_CAN_CREATE_ANSWER && !this.props.anyEdit ? //если редактируется ответ - скрываем
          <AnswerForm key={Date.now()} />
        : null
      }
    </div>
  }

  getChildContext = () => ({
    fetching: this.props.fetching,
    handles: {
      ...this.props.handles,
      createAnswer: event => this.props.createAnswer(event, this.props.question.id)
    }
  })
}

const mapDispatchToProps = dispatch => ({
  getTopic: id => dispatch(actions.getTopic(id)),
  createAnswer: (event, question_id) => {
    event.preventDefault()
    formToJSON(event.target)
      .then(res => dispatch(actions.createAnswer(res, question_id)))
    },
  handles: {
    editAnswer: id => dispatch(actions.editAnswer(id)),
    updateAnswer: (event, id) => {
      event.preventDefault()
      formToJSON(event.target)
      .then(jform => dispatch(actions.updateAnswer(jform, id)))
    },
    bestAnswer: id => dispatch(actions.bestAnswer(id)),
    deleteTopic: id => dispatch(actions.deleteTopic(id)),
    deleteAnswer: id => dispatch(actions.deleteAnswer(id)),
    editComment: id => dispatch(actions.editComment(id)),
    createComment: (event, commentableType, commentableId) => {
      event.preventDefault()
      formToJSON(event.target)
       .then(jform => dispatch(actions.createComment(jform, commentableType, commentableId)))
    },
    updateComment: (event, id) => {
      event.preventDefault()
      formToJSON(event.target)
       .then(jform => dispatch(actions.updateComment(jform, id)))
    },
    deleteComment: id => dispatch(actions.deleteComment(id)),
    changeVote: (event, votableType, votableId, action) => {
      event.preventDefault()
      dispatch(actions.changeVote(votableType, votableId, action))
    }
  }
})

const mapStateToProps = state => ({
    ...state.topic.payload,
    fetching: state.topic.fetching
})

Topic.propTypes = {
  question: PropTypes.object,
  answers: PropTypes.array
}

Topic.contextTypes = {
  user: PropTypes.object.isRequired
}

Topic.childContextTypes = {
  handles: PropTypes.object,
  fetching: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
