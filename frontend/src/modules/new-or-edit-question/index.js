import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions'
import { parseForm } from 'core'
import QuestionForm from './components/form'
import { TOPICS_PATH } from 'core/constants'

class NewOrEditQuestion extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) browserHistory.push(TOPICS_PATH + nextProps.redirectTo)
  }

  componentDidMount() {
    const { id } = this.props.params
    if (id) this.props.initialEditQuestion(id)
  }

  handleSubmit = event => {
    event.preventDefault();
    //console.log(parseForm(event.target))
    this.props.newOrUpdateQuestion(parseForm(event.target), this.props.params.id);
  }

  render = () => {
    const { title, body, fetching, params: { id } } = this.props
    if (id && fetching) return <h1>Loading...</h1>
    return <QuestionForm title={title} body={body} handleSubmit={this.handleSubmit} edit={!!id} />
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
