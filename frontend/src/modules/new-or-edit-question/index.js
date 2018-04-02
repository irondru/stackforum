import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions'
import { formToJSON } from 'core'
import QuestionForm from './components/form'
import { TOPICS_ROOT } from 'core/constants'
import { Spinner } from 'core/components'

class NewOrEditQuestion extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) browserHistory.push(TOPICS_ROOT + nextProps.redirectTo)
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
    const { title, body, fetching } = id ? this.props : ''
    return id && fetching ? <Spinner />
     : <QuestionForm key={Date.now()} title={title} body={body} handleSubmit={this.handleSubmit} edit={!!id} />
  }

}

const mapStateToProps = state => ({
  ...state.question.payload.question,
  fetching: state.question.fetching
})

const mapDispatchToProps = dispatch => ({
  initialEditQuestion: (id) => dispatch(actions.initialEditQuestion(id)),
  newOrUpdateQuestion: (question, id) => dispatch(actions.newOrUpdateQuestion(question, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditQuestion)
