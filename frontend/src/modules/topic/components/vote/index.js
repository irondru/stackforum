import React from 'react'
import PropTypes from 'prop-types'
import { UP_VOTE, DOWN_VOTE, USER_CAN_VOTE } from 'core/constants'
import './style.css'

const Vote = ({ votableType, votableId, score }, { user, handles }) => {
  const { changeVote } = handles
  const enable = user.abilities & USER_CAN_VOTE
  return (
    <div className="votes">
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
  )
}

Vote.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Vote
