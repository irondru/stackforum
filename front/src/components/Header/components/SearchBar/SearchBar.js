import React from 'react'
import { push } from 'react-router-redux'

export default class SearchBar extends React.Component {

  handleSearch = () => {
    push( '/search?query=' + this.refs.query.value )
  }

  render = () =>
    <div id="search-box">
      <input ref="query" type="text" />
      <i className="material-icons search-icon" onClick={this.handleSearch}>search</i>
    </div>
}
