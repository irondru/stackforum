import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import UserLogin from '../user-login';

import TopicsListItem from './topics-list-item';

class Topics extends React.Component {
  constructor(props) {
    super(props)
  }

  topicsList = () =>
    this.props.topics.map(
      topic => <TopicsListItem {...topic} />
    );

  componentDidMount = () => this.props.fetchTopics()

  render = () =>
    <div>
      <UserLogin />
      {this.topicsList()}
    </div>
}

const mapStateToProps = state => {
  return {
    topics: state.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => { dispatch(actions.fetchTopics()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
