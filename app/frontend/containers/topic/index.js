import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Answer from './answer';
import AddComment from '../../components/add-comment';
import Question from './question';

class Topic extends React.Component {
  answersList() {
    if (this.props.answers)
      return this.props.answers.map (
        (answer, id) => <Answer key={id} {...answer} />
      );
  }

  componentDidMount = () => this.props.fetchTopic(this.props.params.id)

  render = () =>
    <div>
      <Question {...this.props.question} />
      <AddComment />
      {this.answersList()}
    </div>
}

const mapStateToProps = (state) => {
  return {
    question: state.topic.question,
    answers: state.topic.answers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopic: (id) => { dispatch(actions.fetchTopic(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic); //соеденяем компонет с хранищем
