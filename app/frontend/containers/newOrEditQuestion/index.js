import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from '../../actions'
import { parseForm } from '../../helpers'
import { TOPICS_PATH, GET_QUESTION } from '../../constants'
import QuestionForm from './form'

class NewOrEditQuestion extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) browserHistory.push(TOPICS_PATH + nextProps.redirectTo)
  }

  componentDidMount() {
    const { id } = this.props.params
    if (id) this.props.editQuestion(id)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.postQuestion(parseForm(event.target), !!this.props.params.id);
  }

  render = () => {
    const { title, body, fetching, params: { id } } = this.props
    if (id && fetching) return <h1>Loading...</h1>
    return <QuestionForm title={title} body={body} handleSubmit={this.handleSubmit} edit={!!id} />
  }

}

const mapStateToProps = state => ({
  ...state.question.data.question,
  fetching: state.question.fetching
})

const mapDispatchToProps = dispatch => ({
  editQuestion: (id) => dispatch(actions.editQuestion(id)),
  postQuestion: (question) => dispatch(actions.postQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditQuestion)
