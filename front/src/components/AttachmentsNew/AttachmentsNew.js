import React from 'react'

const MAX_ATTACHMENTS = 3

export default class Attachments extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: [this.newItem(0)] }
    this.oldvalues = {}
    this.files = {}
  }

  newItem = id => ({
    id,
    body: (
      <div className="attachment-item" key={id}>
        <input
          type='file'
          name='attachments_attributes'
          onFocus={e => this.handleFocus(e, id)}
          onChange={e => this.handleAddItem(e, id)}
        />
        <i className="material-icons" onClick={this.handleDeleteItem.bind(null, id)}>delete</i>
      </div>
    )
  })

  handleFocus = (event, id) =>
    this.oldvalues[id] = event.target.value

  handleAddItem = (event, id) => {
    const { items } = this.state
    const { onChange, propName } = this.props
    const { value, files } = event.target
    if (value === '') this.handleDeleteItem(id)
    this.files[id] = files[0]
    onChange(propName, Object.values(this.files))
    if (items.length < MAX_ATTACHMENTS && this.oldvalues[id] === '')
    this.setState({
      items: [...items, this.newItem(Date.now())]
    })
  }

  handleDeleteItem = id => {
    delete this.files[id]
    console.log(this.files);
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
