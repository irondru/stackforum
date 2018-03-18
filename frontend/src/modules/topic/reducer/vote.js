import { SUCCESS, VOTE, TYPE_QUESTION, TYPE_ANSWER } from 'core/constants'
import { pushInPayload } from 'core'

export default (state, action) => {
  switch (action.type ^ VOTE) {
    case SUCCESS:
      return pushInPayload(state, {
        [TYPE_ANSWER]: () => ({
          answers: state.payload.answers.map(answer =>
          answer.id === action.payload.vote.votable_id ? {
            ...answer,
            score: action.payload.vote.score
          }
          : answer )
        }),
        [TYPE_QUESTION]: () => ({
          question: {
            ...state.payload.question,
            score: action.payload.vote.score
          }
        })
      }[action.payload.vote.votable_type]())
  }
}
