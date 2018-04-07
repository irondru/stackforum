import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from './actions'
import PropTypes from 'prop-types'

import './style.css'
import TopicsListItem from './components/topics-list-item'
import { Spinner } from 'core/components'
import { QUESTION_NEW, USER_CAN_CREATE_QUESTION, SEARCH, QUESTIONS, INDEX } from 'core/constants'

class Topics extends React.Component {

  constructor(props) {
    super(props)
    this.page = 0
  }

  topicsList = topics =>
    topics ? topics.map(
      topic => <TopicsListItem key={topic.id} {...topic} />
    )
    : null

  handleScroll = (event) => {
    const { scrollTop, offsetHeight, scrollHeight} = event.srcElement
    const { fetching, getTopics } = this.props
    if (scrollTop + offsetHeight >= scrollHeight - 256 && !fetching ) {
      this.page += 1
      getTopics(this.page)
    }
  }

  componentDidMount = () => {
    document.querySelector('#content').addEventListener('scroll', this.handleScroll)
    const { location: { pathname, search }, fetching, getTopics, searchTopics } = this.props
    this.title = pathname === SEARCH ? "Результаты поиска" : "Текущие вопросы"
    if (pathname === SEARCH && !fetching) searchTopics(search)
    else if (!fetching) getTopics() //if (!fetching && !topics) //что бы не дергало 2 раза подряд и при логине/разлогине
  }

  componentWillUnmount = () =>
    document.querySelector('#content').removeEventListener('scroll', this.handleScroll)

  render = () => {
    const { fetching, topics } = this.props
    return fetching === QUESTIONS + INDEX ? <Spinner /> :
    <div id="topic">
      <div id="topics-header">
        <h4>{this.title}</h4>
        {
          this.context.user.abilities & USER_CAN_CREATE_QUESTION ?
            <Link to={QUESTION_NEW}>
              <div className="btn">New Question</div>
            </Link>
          : null
        }
      </div>
      {this.topicsList(topics)}
    </div>
  }
}

const mapStateToProps = state => ({
  topics: state.topics.payload.topics,
  fetching: state.topics.fetching
})

const mapDispatchToProps = dispatch => ({
  getTopics: (page) => dispatch(actions.getTopics(page)),
  searchTopics: query => dispatch(actions.searchTopics(query))
})

Topics.propTypes = {
  topics: PropTypes.array
}

Topics.contextTypes = {
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
