import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH } from 'core/constants'

export default function TopicsListItem ({ id, title, answers_count,
  preview, score, views }) {
  return (
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
          <Link to={TOPICS_PATH + id}>{title}</Link>
          <div className="queston-preview">{preview}</div>
        </div>
      </div>
    )
}
