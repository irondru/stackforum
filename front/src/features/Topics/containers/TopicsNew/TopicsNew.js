import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { QUESTIONS } from '../../routes'
import { Spinner, Textarea, AttachmentsNew, SpinButton } from 'components'
import { createQuestionItem } from '../../models'
import * as types from '../../actionTypes'

class NewOrEditQuestion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      question: createQuestionItem()
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.redirectTo) nextProps.history.push(QUESTIONS + nextProps.redirectTo)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id && (!this.props.title && !this.props.body)) //при редактировании если наш store пуст, тащим с бэка
      this.props.initialEditQuestion(id)
  }

  handleChange = (propName, value) =>
    this.setState(prev => ({
      ...prev,
      question: {
        ...prev.question,
        [propName]: value
      }
    }))


  handleSubmit = () => {
    const { newOrUpdateQuestion } = this.props
    const { question } = this.state
    newOrUpdateQuestion(question)
  }

  render = () => {
    const { id } = this.props.match.params
    const { title, body, fetching, user } = this.props
    return id && fetching ? <Spinner />
    :
    <div className="post-layout new-question-container">
      <div className="post-layout-left">
        <img alt="avatar" className="post-avatar" src={process.env.REACT_APP_BACK_ROOT + user.avatar_thumb} />
      </div>
      <div className="post-layout-right">
        <div className="post-layout-right-header">
          <h4>Новый вопрос</h4>
        </div>
        <div className="question-form">
          <p>Заголовок</p>
          <Textarea
            onChange={this.handleChange}
            body={title}
            propName="title"
          />
          <p>Содержание</p>
          <Textarea
            onChange={this.handleChange}
            body={body}
            minHeight="10rem"
          />
          <AttachmentsNew />
          <SpinButton
            className="btn"
            spin={fetching === types.QUESTIONS_NEW}
            onClick={this.handleSubmit}
          >
            Отправить
          </SpinButton>
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = state => ({
  ...state.topics.payload.question,
  fetching: state.topics.fetching,
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  initialEditQuestion: id => actions.topics.initialEditQuestion(id),
  newOrUpdateQuestion: question => actions.topics.newOrUpdateQuestion(question)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditQuestion)
