import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Answer from './answer'
import AddComment from '../../components/add-comment'
import Question from './question'
import AnswerForm from './answerForm'
import { parseForm } from '../../helpers'
import { GET_TOPIC } from '../../constants'

class Topic extends React.Component {

  handleEditAnswer = (id) => {
    this.props.editAnswer(id)
  }

  answersList(item) {
    if (this.props.answers)
      return this.props.answers.map (answer => {
        if (answer.edit) return <AnswerForm key={answer.id} {...answer} />
          else return <Answer key={answer.id} {...answer} handleEditAnswer={this.handleEditAnswer} />
      }
      );
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
      <AnswerForm handleSubmit={this.handleSubmitAnswer} />
    </div>
}

const mapStateToProps = state => {
  return {
    ...state.topic.data,
    fetching: state.topic.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopic: (id) => dispatch(actions.getTopic(id)),
    createAnswer: (answer, questionId) => dispatch(actions.createAnswer(answer, questionId)),
    editAnswer: (id) => dispatch(actions.editAnswer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic); //соеденяем компонет с хранищем
