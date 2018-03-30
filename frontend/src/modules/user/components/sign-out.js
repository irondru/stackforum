import React from 'react'

export default class SignOut extends React.Component {
  render = () =>
  <div>
    <button onClick={this.props.handles.signOut}>SignOut</button>
  </div>
}
