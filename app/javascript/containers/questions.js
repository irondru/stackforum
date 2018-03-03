import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import QuestionListItem from '../components/questions-list-item';

const mapStateToProps = state => {
  return {
    questions: state.questions.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => { dispatch(actions.fetchQuestions()) }
  }
}

class QuestionsList extends React.Component {
  questionsList = () =>
    this.props.questions.map(
      question => <QuestionListItem {...question} />
    );

  componentDidMount = () => this.props.fetchQuestions()

  render = () =>
    <div>
      {this.questionsList()}
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
