import React from 'react'
import { MAX_ATTACHMENTS } from 'core/constants'

export default class Attachments extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: [this.newItem(0)] }
    this.oldvalues = {}
  }

  newItem = id => ({
    id,
    body: (
      <div key={id}>
        <input type='file' name='attachments_attributes'
          onFocus={e => this.handleFocus(e, id)}
          onChange={e => this.handleAddItem(e, id)}
        />
        <button onClick={e => this.handleDeleteItem(e, id)}>del</button>
      </div>
    )
  })

  handleFocus = (event, id) =>
    this.oldvalues[id] = event.target.value

  handleAddItem = (event, id) => {
    if (event.target.value === '') this.handleDeleteItem(event, id)
    if (this.state.items.length < MAX_ATTACHMENTS && this.oldvalues[id] === '')
    this.setState({
      items: [...this.state.items, this.newItem(Date.now())]
    })
  }

  handleDeleteItem = (event, id) => {
    event.preventDefault()
    if (this.oldvalues[id] === undefined) return
    if (this.state.items.length === 1) {
      this.setState({ items: [this.newItem(Date.now())] })
      return
    }
    this.setState({ items: this.state.items.filter(item => item.id !== id) })
  }

  render = () =>
  <div>
    { this.state.items.map(item => item.body) }
  </div>
}
