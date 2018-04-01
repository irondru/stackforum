import React from 'react'

import './style.css'

export default class AdvTexarea extends React.Component {

  divInit = target => {
    const { body } = this.props
    if (target && body) target.innerHTML = body
  }

  handleCopy = event =>
    this.refs.hiddenText.value += String.fromCharCode(event.which)

  render = () =>
    <div>
      <div
        contentEditable="true"
        ref={this.divInit}
        onKeyPress={this.handleCopy}
        className="adv-text-area"
        style={{
          backgroundColor: 'white',
          minHeight: this.props.minHeight
        }}
      />
      <textarea ref="hiddenText" name="body" style={{display: 'none'}} />
    </div>

}
