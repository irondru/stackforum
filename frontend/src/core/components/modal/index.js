import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

//инлайн стили чтобы перекрыть стили body
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 60
}

const modalStyle = {
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: 10,
  maxWidth: 300,
  minHeight: 100,
  margin: '0 auto',
  padding: 30
}

class Modal extends React.Component {

  render = () => {
    if(!this.props.show) return null

    return <div style={backdropStyle}>
      <div style={modalStyle}>
        <i className="material-icons button-close" onClick={this.props.onClose}>cancel</i>
        {this.props.children}
      </div>
    </div>
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal
