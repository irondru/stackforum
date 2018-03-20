import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from './actions'

import { AnswerForm, Question, AnswerItem } from './components'
import { formToJSON } from 'core'

class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.handles = {
     editAnswer: id => props.editAnswer(id),
     createAnswer: event => {
       event.preventDefault()
       formToJSON(event.target)
       .then(res => props.createAnswer(res, this.props.question.id))
     },
     upadateAnswer: (event, id) => {
      event.preventDefault()
      formToJSON(event.target)
      .then(jform => props.updateAnswer(jform, id))
     },
     editComment: (id) => props.editComment(id),
     createComment: (event, commentableType, commentableId) => {
       event.preventDefault()
       formToJSON(event.target)
       .then(jform => props.createComment(jform, commentableType, commentableId))
     },
     updateComment: (event, commentableType, commentableId, id) => {
       event.preventDefault()
       formToJSON(event.target)
       .then(jform => props.updateComment(jform, id))
     },
     changeVote: (event, votableType, votableId, action) => {
       event.preventDefault()
       props.changeVote(votableType, votableId, action)
     }
   }
  }

  componentDidMount = () => this.props.getTopic(this.props.params.id)

  answersList = () =>
    this.props.answers ? this.props.answers.map(answer =>
      answer.edit ? <AnswerForm key={answer.id} {...answer} handles={this.handles}  /> :
        <AnswerItem key={answer.id} {...answer} handles={this.handles} />
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
      <Question handles={this.handles} {...this.props.question} />
      {this.answersList()}
      <AnswerForm key={Math.random()}  handleSubmit={this.handles.createAnswer} />
    </div> )
   }
}

const mapStateToProps = state => {
  return {
    ...state.topic.payload,
    fetching: state.topic.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopic: id => dispatch(actions.getTopic(id)),
    createAnswer: (answer, questionId) => dispatch(actions.createAnswer(answer, questionId)),
    updateAnswer: (answer, id) => dispatch(actions.updateAnswer(answer, id)),
    editAnswer: id => dispatch(actions.editAnswer(id)),
    createComment: (comment, commentableType, commentableId) =>
      dispatch(actions.createComment(comment, commentableType, commentableId)),
    editComment: (id) => dispatch(actions.editComment(id)),
    updateComment: (comment, id) => dispatch(actions.updateComment(comment, id)),
    changeVote: (votableType, votableId, action) =>
      dispatch(actions.changeVote(votableType, votableId, action))
  }
}

Topic.contextTypes = {
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
