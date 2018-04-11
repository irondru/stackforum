import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import * as actions from '../../actions'
import { QUESTIONS } from '../../routes'
import { formToJSON } from 'features/helpers'
import { Spinner, Textarea, Attachments } from 'components'

class NewOrEditQuestion extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) push(QUESTIONS + nextProps.redirectTo)
  }

  componentDidMount() {
    const { id } = this.props.params
    if (id && (!this.props.title && !this.props.body)) //при редактировании если наш store пуст, тащим с бэка
      this.props.initialEditQuestion(id)
  }

  handleSubmit = event => {
    event.preventDefault()
    formToJSON(event.target)
     .then(jform => this.props.newOrUpdateQuestion(jform, this.props.params.id))
  }

  render = () => {
    const { id } = this.props.params
    const { title, body, fetching, user } = id ? this.props : ''
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
        <form onSubmit={this.handleSubmit}>
          <p>Заголовок</p>
          <Textarea body={title} name="title" />
          <br/>
          <p>Содержание</p>
          <Textarea body={body} minHeight="10rem" />
          <Attachments />
          <input className="btn" type="submit" name="submit" />
        </form>
      </div>
    </div>
  }

}

const mapStateToProps = state => ({
  ...state.question.payload.question,
  fetching: state.question.fetching,
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  initialEditQuestion: id => actions.topics.initialEditQuestion(id),
  newOrUpdateQuestion: (question, id) => actions.topics.newOrUpdateQuestion(question, id)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditQuestion)
