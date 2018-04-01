import React from 'react'

import './style.css'

export default class AdvTexarea extends React.Component {

  divInit = target => {
    const { body } = this.props
    if (target && body) target.innerHTML = body
  }

  handleCopy = event =>
    this.refs.hiddenText.value = event.target.innerHTML
      .replace(/<div>/g, '\n')
      .replace(/(<([^>]+)>)/ig,'')
      .replace(/&nbsp;|\u202F|\u00A0/g, ' ')

  render = () =>
    <div>
      <textarea ref="hiddenText" name={this.props.name || 'body'} style={{display: 'none'}} />
      <div
        contentEditable="true"
        ref={this.divInit}
        onBlur={this.handleCopy}
        className="adv-text-area"
        style={{
          backgroundColor: 'white',
          minHeight: this.props.minHeight
        }}
      />
    </div>

}
