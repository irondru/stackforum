import React from 'react'
import { UP_VOTE, DOWN_VOTE } from 'core/constants'

export default ({handles: { changeVote }, votableType, votableId, score}) =>
  <div>
    <p>score: {score}</p>
    <button onClick={(e) => changeVote(e, votableType, votableId, UP_VOTE)}>upvote</button>
    <button onClick={(e) => changeVote(e, votableType, votableId, DOWN_VOTE)}>downvote</button>
  </div>
