import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import './style.css'

import TopicsListItem from './components/topics-list-item'

class Topics extends React.Component {

  topicsList = () => {
    if (this.props.topics)
      return this.props.topics.map(
      topic => <TopicsListItem key={topic.id} {...topic} />
    );
  }

  componentDidMount = () => this.props.getTopics()

  render = () =>
    <div id="topic">
      {this.topicsList()}
    </div>
}

const mapStateToProps = state => {
  return {
    topics: state.topics.payload.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => { dispatch(actions.getTopics()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
