import React from 'react'
import { withRouter } from "react-router-dom"

class SearchBar extends React.Component {

  handleSearch = () => {
    this.props.history.push( '/search?query=' + this.refs.query.value )
  }

  render = () =>
    <div id="search-box">
      <input ref="query" type="text" />
      <i className="material-icons search-icon" onClick={this.handleSearch}>search</i>
    </div>
}

export default withRouter(SearchBar)
