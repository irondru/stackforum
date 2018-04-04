import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import { TOPICS_ROOT } from 'core/constants'

const TopicsListItem = ({ id, title, answers_count, preview, score, views }) =>
  <div className="topics-list-item">
    <div className="counter-box">
      {score}
      <div className="micro-text">votes</div>
    </div>
    <div className="counter-box">
      {answers_count}
      <div className="micro-text">answers</div>
    </div>
    <div className="counter-box">
      {views}
      <div className="micro-text" >views</div>
    </div>
    <div className="lnk">
      <Link to={TOPICS_ROOT + id}>{title}</Link>
      <div className="queston-preview">{preview}</div>
    </div>
  </div>

TopicsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  answers_count: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired
}

export default TopicsListItem
