import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from '../../actions'
import { parseForm } from '../../helpers'
import { TOPICS_PATH, GET_QUESTION } from '../../constants'

class QuestionFrom extends React.Component {

  componentWillReceiveProps(nextProps) {
    // if (nextProps.question.id) browserHistory.push(TOPICS_PATH + nextProps.question.id)
  }

  componentDidMount () {
    const { id } = this.props.params
    if (id) this.props.getTopic(id)
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.postQuestion(parseForm(event.target));
  }

  render = () => {
    if (!this.props.fetching) console.log(this.props.id);

    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="title" />
        <textarea name="body" />
        <input type="submit" name="submit" />
      </form>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  ...state.question.data.question,
  fetching: state.question.fetching
})

const mapDispatchToProps = dispatch => ({
  getTopic: (id, actionType = GET_QUESTION) => { dispatch(actions.getTopic(id, actionType)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFrom)
