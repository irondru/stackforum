import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from './actions'

import { AnswerForm, Question, AnswerItem } from './components'
import { formToJSON } from 'core'
import { USER_CAN_CREATE_ANSWER } from 'core/constants'

class Topic extends React.Component {

  componentDidMount = () => this.props.getTopic(this.props.params.id)

  answersList = () =>
    this.props.answers ? this.props.answers.map(answer =>
      answer.edit ? <AnswerForm key={answer.id} {...answer} /> :
        <AnswerItem key={answer.id} {...answer} />
   ) : null

  isLoad() {
    if (this.props.fetching) {
      return (<h1>'loading'</h1>)
    } else {
      return (<h1>'complete'</h1>)
    }
  }

  render = () => {
    return (
    <div>
      {this.isLoad()}
      <h2>{this.context.user.email}</h2>
      <Question {...this.props.question} />
      {this.answersList()}
      {
        this.context.user.abilities & USER_CAN_CREATE_ANSWER ?
          <AnswerForm key={Math.random()} /> : null
      }
    </div> )
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
