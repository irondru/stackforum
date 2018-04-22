import React from 'react'

export default class AdvTexarea extends React.Component {

  handleInit = target => {
    const { body } = this.props
    if (target && body) target.innerHTML = body
  }

  handleCopy = event =>
    this.props.onChange(this.props.propName || 'body',
      event.target.innerHTML
        .replace(/((?!<div>)(<([^>]+)>))/ig, '') //выпиливаем все теги кроме <div>
        .replace(/<div>/g, '<br>')
    )

  render = () =>
    <div
        contentEditable="true"
        ref={this.handleInit}
        onBlur={this.handleCopy}
        className="adv-text-area"
        style={{
          backgroundColor: 'white',
          minHeight: this.props.minHeight
        }}
    />

}
