import React from 'react';

export default class Vote extends React.Component {
  render()  {
    return (
      <div>
        <p>{this.props.vote}</p>
      </div>
    )
  }
}
