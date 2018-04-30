import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { QUESTIONS } from '../../routes'
import { Spinner, Textarea, AttachmentsNew, SpinButton } from 'components'
import { createQuestionItem } from '../../models'
import * as types from '../../actionTypes'
import { base64Loader } from 'features/utils'

class NewOrEditQuestion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      question: createQuestionItem()
    }
  }

  componentWillReceiveProps = nextProps => {
    if (!nextProps.question) return
    const { question } = nextProps
    this.setState({
      question: {
        ...this.state.question,
        ...question
      }
    })
    if (question.redirectTo) nextProps.history.push(QUESTIONS + question.redirectTo)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    //if (id && (!this.props.title && !this.props.body))
    if (id) this.props.initialEditQuestion(id)
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
    base64Loader(question.attachments_attributes)
    .then(files => {
      question.attachments_attributes = files
      newOrUpdateQuestion(question)
    })
  }

  render = () => {
    const { id } = this.props.match.params
    const { title, body } = this.props.question || {}
    const { fetching, user } = this.props
    return id && fetching ? <Spinner />
    :
    <div className="post-layout new-question-container">
      <div className="post-layout-left">
        <img alt="avatar" className="post-avatar" src={user.avatar_thumb} />
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
          <AttachmentsNew propName="attachments_attributes" onChange={this.handleChange} />
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
  question: state.topics.payload.question,
  fetching: state.topics.fetching,
  user: state.user.payload
})

const mapDispatchToProps = dispatch => {
  const { initialEditQuestion, newOrUpdateQuestion } = actions.topics
  return bindActionCreators ({
    initialEditQuestion,
    newOrUpdateQuestion
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditQuestion)
