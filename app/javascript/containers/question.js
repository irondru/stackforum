import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Answer from '../components/answer';
import AddComment from '../components/add-comment';
import QuestionHead from '../components/question-head';

const mapStateToProps = (state) => {
  return {
    question: state.question,
    answers: state.question.answers
  }
}

class Question extends React.Component {
  answersList() {
    return this.props.answers.map ((answer, id) => {
      return <Answer key={id} {...answer} />
    });
  }

  render() {
    return (
      <div>
        <QuestionHead question={this.props.question} />
        <AddComment />
        {this.answersList()}
      </div>
    );
  }
}


export default connect(mapStateToProps)(Question); //соеденяем компонет с хранищем
