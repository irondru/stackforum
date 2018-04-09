import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import * as actions from './actions'

import { AnswerForm, Question, AnswerItem } from './components'
import { Spinner } from 'core/components'
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
    const { fetching, question, user: { abilities } } = this.props
    return fetching === QUESTIONS + SHOW || !question ? <Spinner />
    :
    <div className="topic-layout">
      <Question {...question} />
      {this.answersList()}
      {
        abilities & USER_CAN_CREATE_ANSWER && !this.props.anyEdit ? //если редактируется ответ - скрываем
          <AnswerForm question_id={question.id} />
        : null
      }
    </div>
  }

}

const mapDispatchToProps = dispatch => ({
  getTopic: id => dispatch(actions.getTopic(id))
})

const mapStateToProps = state => ({
    ...state.topic.payload,
    fetching: state.topic.fetching,
    errors: state.topic.errors,
    user: state.user.payload
})

Topic.propTypes = {
  question: PropTypes.object,
  answers: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
