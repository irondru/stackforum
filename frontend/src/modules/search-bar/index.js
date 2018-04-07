import React from 'react'
import { browserHistory } from 'react-router'

import { SEARCH } from 'core/constants'
import './style.css'

class SearchBar extends React.Component {

  handleSearch = () => {
    browserHistory.push( SEARCH + '?query=' + this.refs.query.value )
  }

  render = () =>
    <div id="search-box">
      <input ref="query" type="text" />
      <i className="material-icons search-icon" onClick={this.handleSearch}>search</i>
    </div>
}

export default SearchBar
