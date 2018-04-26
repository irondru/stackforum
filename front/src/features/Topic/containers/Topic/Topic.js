import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

import { AnswerNew, Question, AnswerItem } from '../../containers'
import { Spinner } from 'components'
import { abilities } from 'features/User'
import * as types from '../../actionTypes'

class Topic extends React.Component {

  componentDidMount = () => {
    const { fetching, getTopic, match: { params: {id} } } = this.props
    if (!fetching) getTopic(id) //что бы не дергало 2 раза подряд
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deleted) push('/')
  }

  answersList = () =>
    this.props.answers ? this.props.answers.map(answer =>
      answer.edit ?
        <AnswerNew
          key={answer.id}
          model={answer}
          edit={true}
          />
        : <AnswerItem
            key={answer.id}
            {...answer}
            edit={false}
            itsMyTopic={this.props.question.access}
          />
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
          <AnswerNew model={{ question_id: question.id }} />
        : null
      }
    </div>
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.topic
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
