import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import ListItem from '../../components/ListItem'
import { Spinner } from 'components'
import { QUESTIONS_SEARCH, QUESTION_NEW } from '../../routes'
import { abilities } from 'features/User'
import * as types from '../../actionTypes'

class Topics extends React.Component {

  constructor(props) {
    super(props)
    this.page = 0
  }

  topicsList = topics =>
    topics ? topics.map(
      topic => <ListItem key={topic.id} {...topic} />
    )
    : null

  handleScroll = event => {
    const { scrollTop, offsetHeight, scrollHeight} = event.srcElement
    const { fetching, getTopics } = this.props
    if (scrollTop + offsetHeight >= scrollHeight - 256 && !fetching)
      getTopics(this.page += 1)
  }

  componentDidMount = () => {
    document.querySelector('#content').addEventListener('scroll', this.handleScroll)
    const { location: { pathname, search }, fetching, getTopics, searchTopics } = this.props
    this.title = pathname === QUESTIONS_SEARCH ? "Результаты поиска" : "Текущие вопросы"
    if (pathname === QUESTIONS_SEARCH && !fetching) searchTopics(search)
    else if (!fetching) getTopics() //if (!fetching && !topics) //что бы не дергало 2 раза подряд и при логине/разлогине
  }

  componentWillUnmount = () =>
    document.querySelector('#content').removeEventListener('scroll', this.handleScroll)

  render = () => {
    const { fetching, topics, user } = this.props
    return fetching === types.QUESTIONS_INDEX ? <Spinner /> :
    <div id="topic">
      <div id="topics-header">
        <h4>{this.title}</h4>
        {
          user.abilities & abilities.CAN_CREATE_QUESTION ?
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
  fetching: state.topics.fetching,
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getTopics: page => actions.topics.getTopics(page),
  searchTopics: query => actions.topics.searchTopics(query)
}, dispatch)

Topics.propTypes = {
  topics: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
