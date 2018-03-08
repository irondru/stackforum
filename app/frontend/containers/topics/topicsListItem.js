import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH } from '../../constants'

export default class TopicsListItem extends React.Component {
  render() {
    const { id, title } = this.props
    return (
      <div>
        <Link to={TOPICS_PATH + id}>{title}</Link>
        <br />
      </div>
    )
  }
}
