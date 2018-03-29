import React from 'react'

import './style.css'

export default class AdvTexarea extends React.Component {

  divInit = target => {
    const { body } = this.props
    if (target && body) target.innerHTML = body
  }

  handleCopy = event =>
    this.refs.hiddenText.value = event.target.innerHTML

  render = () =>
    <div>
      <div
        contentEditable="true"
        ref={this.divInit}
        onKeyDown={this.handleCopy}
        className="adv-text-area"
        style={{backgroundColor: 'white'}}
      />
      <textarea ref="hiddenText" name="body" style={{display: 'none'}} />
    </div>

}
