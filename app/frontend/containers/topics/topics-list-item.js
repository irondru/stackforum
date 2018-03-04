import React from 'react'
import { Link } from 'react-router'

export default class TopicsListItem extends React.Component {
  render() {
    const {id, title} = this.props
    return (
      <div>
        <Link to={`/topics/${id}`}>{title}</Link>
        <br />
      </div>
    )
  }
}
