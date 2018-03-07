import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Answer from './answer'
import AddComment from '../../components/add-comment'
import Question from './question'

class Topic extends React.Component {

  answersList() {
    if (this.props.answers)
      return this.props.answers.map (
        (answer, id) => <Answer key={id} {...answer} />
      );
  }

  componentDidMount = () => this.props.getTopic(this.props.params.id)

  isLoad() {
    if (this.props.fetching) {
      return (<h1>'loading'</h1>)
    } else {
      return (<h1>'complete'</h1>)
    }
  }

  render = () =>
    <div>
      {this.isLoad()}
      <Question {...this.props.question} />
      <AddComment />
      {this.answersList()}
    </div>
}

const mapStateToProps = state => {
  return {
    ...state.topic.data,
    fetching: state.topic.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopic: (id) => { dispatch(actions.getTopic(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic); //соеденяем компонет с хранищем
