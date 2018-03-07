import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from '../../actions'
import { parseForm } from '../../helpers'
import { TOPICS_PATH } from '../../constants'

class QuestionFrom extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.id);
    if (nextProps.id) browserHistory.push(TOPICS_PATH + nextProps.id)
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.postQuestion(parseForm(event.target));
  }

  render = () => {
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
  ...state.question
})

const mapDispatchToProps = dispatch => ({
  postQuestion: (question) => { dispatch(actions.postQuestion(question)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFrom)
