import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import { AnswerForm, Question, AnswersList } from './components'
import { parseForm } from 'core'

class Topic extends React.Component {

  componentDidMount = () => this.props.getTopic(this.props.params.id)

  isLoad() {
    if (this.props.fetching) {
      return (<h1>'loading'</h1>)
    } else {
      return (<h1>'complete'</h1>)
    }
  }

  render = () =>
    <div>
      {this.isLoad()}
      <Question {...this.props.question} />
      <AnswersList {...this.props} />
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
    createComment: (comment, commentableType, commentableId) =>
      dispatch(actions.createComment(comment, commentableType, commentableId)),
    editComment: (id) => dispatch(actions.editComment(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
