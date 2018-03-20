import React from 'react'
import PropTypes from 'prop-types'
import { UP_VOTE, DOWN_VOTE, USER_CAN_VOTE } from 'core/constants'

const Vote = ({ votableType, votableId, score }, context) => {
  const { changeVote } = context.handles
  return (
    <div>
      <p>score: {score}</p>
      {
        context.user.abilities & USER_CAN_VOTE ?
        <div>
          <button onClick={(e) => changeVote(e, votableType, votableId, UP_VOTE)}>upvote</button>
          <button onClick={(e) => changeVote(e, votableType, votableId, DOWN_VOTE)}>downvote</button>
        </div> : null
      }
    </div>
  )
}

Vote.contextTypes = {
  handles: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Vote
