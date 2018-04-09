import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { UP_VOTE, DOWN_VOTE, USER_CAN_VOTE } from 'core/constants'
import './style.css'

const Vote = ({ votableType, votableId, score, user, changeVote }) => {
  const enable = user.abilities & USER_CAN_VOTE
  return <div className="votes">
    <i disabled="true" className={`material-icons ${enable ? '' : 'disabled'}`}
      onClick={enable ? (e) => changeVote(e, votableType, votableId, UP_VOTE) : null}>
      keyboard_arrow_up
    </i>
    <div className="score">{score}</div>
    <i className={`material-icons ${enable ? '' : 'disabled'}`}
      onClick={enable ? (e) => changeVote(e, votableType, votableId, DOWN_VOTE) : null}>
      keyboard_arrow_down
    </i>
  </div>
}

Vote.propTypes = {
  votableType: PropTypes.number.isRequired,
  votableId: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => ({
  changeVote: (event, votableType, votableId, action) => {
    event.preventDefault()
    dispatch(actions.changeVote(votableType, votableId, action))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
