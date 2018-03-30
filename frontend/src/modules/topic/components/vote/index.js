import React from 'react'
import PropTypes from 'prop-types'
import { UP_VOTE, DOWN_VOTE, USER_CAN_VOTE } from 'core/constants'
import './style.css'

const Vote = ({ votableType, votableId, score }, { user, handles }) => {
  const { changeVote } = handles
  const votable = user.abilities & USER_CAN_VOTE
  return (
    <div className="votes">
      <i className={votable ? "material-icons" : "hidden"} onClick={(e) => changeVote(e, votableType, votableId, UP_VOTE)}>
        keyboard_arrow_up
      </i>
      <div className="score">{score}</div>
      <i className={votable ? "material-icons" : "hidden"} onClick={(e) => changeVote(e, votableType, votableId, DOWN_VOTE)}>
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
