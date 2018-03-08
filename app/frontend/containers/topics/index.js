import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import TopicsListItem from './topicsListItem'

class Topics extends React.Component {
  constructor(props) {
    super(props)
  }

  topicsList = () => {
    if (this.props.topics)
      return this.props.topics.map(
      topic => <TopicsListItem {...topic} />
    );
  }

  componentDidMount = () => this.props.getTopics()

  render = () =>
    <div>
      {this.topicsList()}
    </div>
}

const mapStateToProps = state => {
  return {
    topics: state.topics.data.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => { dispatch(actions.getTopics()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
