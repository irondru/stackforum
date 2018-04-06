import React from 'react'

class Search extends React.Component {

  handleSubmit = event => {

  }

  render = () =>
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="body" />
      <input type="submit" />
    </form>
}

export default Search
