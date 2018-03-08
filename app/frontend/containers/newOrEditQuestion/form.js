import React from 'react'

export default class QuestionForm extends React.Component {
  render() {
    const { title, body, handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" defaultValue={title}/>
          <textarea name="body" defaultValue={body} />
          <input type="submit" name="submit" />
        </form>
      </div>
    )
  }
}
