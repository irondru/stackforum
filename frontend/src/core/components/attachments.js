import React from 'react'
import { MAX_ATTACHMENTS } from 'core/constants'

export default class Attachments extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: [this.newItem(0)] }
    this.oldvalues = {}
  }

  newItem = id =>
    <div key={id}>
      <input type='file' name='attachments_attributes'
        onFocus={e => this.handleFocus(e, id)}
        onChange={e => this.handleAddItem(id)}
      />
      <a href='null' onClick={e => this.handleDeleteItem(e, id)}>del</a>
    </div>

  handleFocus = (event, id) =>
    this.oldvalues[id] = event.target.value

  handleAddItem = (id) => {
    if (this.state.items.length < MAX_ATTACHMENTS && this.oldvalues[id] === '')
    this.setState({
      items: [...this.state.items, this.newItem(Math.random())]
    })
  }

  handleDeleteItem = (event, id) => {
    event.preventDefault()
    if (this.oldvalues[id] === undefined) return
    if (this.state.items.length === 1) {
      this.setState({ items: [this.item(Math.random())] })
      return
    }
    let arr = this.state.items
    arr.splice(id, 1)
    this.setState({ items: arr })
  }

  render = () =>
  <div>
    { this.state.items }
  </div>  
}
