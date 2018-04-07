import React from 'react'
import { browserHistory } from 'react-router'

import { SEARCH } from 'core/constants'

class SearchBar extends React.Component {

  handleSearch = () => {
    browserHistory.push( SEARCH + '?query=' + this.refs.query.value )
  }

  render = () =>
    <div>
      <input ref="query" type="text" />
      <button onClick={this.handleSearch}>Find</button>
    </div>
}

export default SearchBar
