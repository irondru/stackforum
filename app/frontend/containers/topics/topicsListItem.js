import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH } from '../../constants'

export default function TopicsListItem ({ id, title }) {
  return (
      <div>
        <Link to={TOPICS_PATH + id}>{title}</Link>
        <br />
      </div>
    )
}
