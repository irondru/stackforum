import React from 'react'

class Search extends React.Component {

  handleSubmit = event => {

  }

  componentDidMount = () => {
     if (this.props.location) console.log(this.props.location.search);
   }

  render = () =>
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="body" />
      <input type="submit" />
    </form>
}

export default Search
