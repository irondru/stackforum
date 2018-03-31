import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import './style.css'
import TopicsListItem from './components/topics-list-item'
import { Spinner } from 'core/components'

class Topics extends React.Component {

  topicsList = topics =>
    topics ? topics.map(
      topic => <TopicsListItem key={topic.id} {...topic} />
    )
    : null

  componentDidMount = () => this.props.getTopics()

  render = () => {
    const { fetching, topics } = this.props
    return fetching ? <Spinner />
    :
    <div id="topic">
      {this.topicsList(topics)}
    </div>
  }
}

const mapStateToProps = state => ({
  topics: state.topics.payload.topics,
  fetching: state.topics.fetching
})

const mapDispatchToProps = dispatch => {
  return {
    getTopics: () => { dispatch(actions.getTopics()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
