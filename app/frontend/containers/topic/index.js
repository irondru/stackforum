import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import Answer from './components/answer-item'
import Question from './components/question'
import AnswerForm from './components/answer-form'
import { parseForm } from 'core'

class Topic extends React.Component {

  handleEditAnswer = id => this.props.editAnswer(id)

  handleUpadateAnswer = (event, id) => {
   event.preventDefault()
   this.props.updateAnswer(parseForm(event.target), id)
  }

  answersList() {
    if (this.props.answers)
      return this.props.answers.map (answer => {
        if (answer.edit) return <AnswerForm
          key={answer.id}
          {...answer}
          handleSubmit={this.handleUpadateAnswer}
          handleCancelEdit={this.handleEditAnswer} />
        else return <Answer key={answer.id} {...answer} handleEditAnswer={this.handleEditAnswer} />
      });
  }

  componentDidMount = () => this.props.getTopic(this.props.params.id)

  isLoad() {
    if (this.props.fetching) {
      return (<h1>'loading'</h1>)
    } else {
      return (<h1>'complete'</h1>)
    }
  }

  handleSubmitAnswer = event => {
    event.preventDefault()
    this.props.createAnswer(parseForm(event.target), this.props.question.id)
  }

  render = () =>
    <div>
      {this.isLoad()}
      <Question {...this.props.question} />
      <AddComment />
      {this.answersList()}
      <AnswerForm body="" handleSubmit={this.handleSubmitAnswer} />
    </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
