import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import { AnswerForm, Question, AnswerItem } from './components'
import { parseForm } from 'core'

class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.handles = {
     editAnswer: id => props.editAnswer(id),
     createAnswer: event => {
       event.preventDefault()
       console.log(parseForm(event.target))
       props.createAnswer(parseForm(event.target), this.props.question.id)
     },
     upadateAnswer: (event, id) => {
      event.preventDefault()
      props.updateAnswer(parseForm(event.target), id)
     },
     editComment: (id) => props.editComment(id),
     createComment: (event, commentableType, commentableId) => {
       event.preventDefault()
       props.createComment(parseForm(event.target), commentableType, commentableId)
     },
     updateComment: (event, commentableType, commentableId, id) => {
       event.preventDefault()
       props.updateComment(parseForm(event.target), id)
     },
     changeVote: (event, votableType, votableId, action) => {
       event.preventDefault()
       //console.log(action);
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

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
