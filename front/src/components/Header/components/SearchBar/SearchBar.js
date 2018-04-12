import React from 'react'
import { push } from 'react-router-redux'

export default () => {
  const handleSearch = () => {
    push( '/search?query=' + this.refs.query.value )
  }

  return  <div id="search-box">
    <input ref="query" type="text" />
    <i className="material-icons search-icon" onClick={handleSearch}>search</i>
  </div>
}
