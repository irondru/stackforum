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
    const { fetching, answers, getTopic, params: {id} } = this.props
    if (!fetching && !answers) getTopic(id) //что бы не дергало 2 раза подряд и при логине/разлогине
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
    return fetching === QUESTIONS + SHOW ? <Spinner />
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
     handles: {
       editAnswer: id => this.props.editAnswer(id),
       createAnswer: event => {
         event.preventDefault()
         formToJSON(event.target)
          .then(res => this.props.createAnswer(res, this.props.question.id))
       },
       updateAnswer: (event, id) => {
         event.preventDefault()
         formToJSON(event.target)
         .then(jform => this.props.updateAnswer(jform, id))
       },
       bestAnswer: id =>this.props.bestAnswer(id),
       deleteTopic: id => this.props.deleteTopic(id),
       deleteAnswer: id => this.props.deleteAnswer(id),
       editComment: id => this.props.editComment(id),
       createComment: (event, commentableType, commentableId) => {
         event.preventDefault()
         formToJSON(event.target)
          .then(jform => this.props.createComment(jform, commentableType, commentableId))
       },
       updateComment: (event, id) => {
         event.preventDefault()
         formToJSON(event.target)
          .then(jform => this.props.updateComment(jform, id))
       },
       deleteComment: id => this.props.deleteComment(id),
       changeVote: (event, votableType, votableId, action) => {
         event.preventDefault()
         this.props.changeVote(votableType, votableId, action)
       }
     }
   })
}

const mapDispatchToProps = dispatch => {
  return {
    getTopic: id => dispatch(actions.getTopic(id)),
    createAnswer: (answer, questionId) => dispatch(actions.createAnswer(answer, questionId)),
    updateAnswer: (answer, id) => dispatch(actions.updateAnswer(answer, id)),
    editAnswer: id => dispatch(actions.editAnswer(id)),
    bestAnswer: id => dispatch(actions.bestAnswer(id)),
    deleteTopic: id => dispatch(actions.deleteTopic(id)),
    deleteAnswer: id => dispatch(actions.deleteAnswer(id)),
    createComment: (comment, commentableType, commentableId) =>
      dispatch(actions.createComment(comment, commentableType, commentableId)),
    editComment: (id) => dispatch(actions.editComment(id)),
    updateComment: (comment, id) => dispatch(actions.updateComment(comment, id)),
    deleteComment: id => dispatch(actions.deleteComment(id)),
    changeVote: (votableType, votableId, action) =>
      dispatch(actions.changeVote(votableType, votableId, action))
  }
}

const mapStateToProps = state => {
  return {
    ...state.topic.payload,
    fetching: state.topic.fetching
  }
}

Topic.contextTypes = {
  user: PropTypes.object.isRequired
}

Topic.childContextTypes = {
  handles: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
