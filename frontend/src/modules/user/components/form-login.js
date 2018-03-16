import React from 'react'

export default class FormLogin extends React.Component {
  render = () =>
  <div>
    <br/>
    <form onSubmit={this.props.onSubmit}>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <input type="submit" name="submit" />
    </form>
  </div>
}
