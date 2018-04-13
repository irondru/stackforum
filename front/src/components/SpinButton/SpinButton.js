import React from 'react'
import PropTypes from 'prop-types'

//https://stephanwagner.me/only-css-loading-spinner

const SpinButton = ({ spin = 0, children, className }) =>
  <button className={`btn ${ spin ? 'spinner' : '' }`}>
    {children}
  </button>

SpinButton.propTypes = {
  spin: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  className: PropTypes.string,
  children: PropTypes.node
}

export default SpinButton