import React from 'react'
import { Link } from 'react-router'
import { TOPICS_PATH } from 'core/constants'

export class Question extends React.Component {

  onClick = () => {
    this.props.editQuestion(this.props)
  }

  render() {
    const { title, body, id } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={TOPICS_PATH + id + '/edit'}>Edit</Link>
      </div>
    )
  }
}
