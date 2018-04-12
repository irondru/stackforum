import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

import { AnswerNew, Question, AnswerItem } from '../../containers'
import { Spinner } from 'components'
import { abilities } from 'features/User'
import * as types from '../../actionTypes'

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
      answer.edit ? <AnswerNew key={answer.id} {...answer} /> :
        <AnswerItem key={answer.id} {...answer} itsMyTopic={this.props.question.access} />
   ) : null

  render = () => {
    const { fetching, question, user } = this.props
    return fetching === types.QUESTIONS_SHOW || !question ? <Spinner />
    :
    <div className="topic-layout">
      <Question {...question} />
      {this.answersList()}
      {
        user.abilities & abilities.CAN_CREATE_ANSWER && !this.props.anyEdit ? //если редактируется ответ - скрываем
          <AnswerNew question_id={question.id} />
        : null
      }
    </div>
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  getTopic: id => actions.topic.getTopic(id)
}, dispatch)

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
