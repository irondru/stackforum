import { SUCCESS, VOTE, TYPE_QUESTION, TYPE_ANSWER } from 'core/constants'
import { payloadPush } from 'core'

export default (state, action) => {
  switch (action.type ^ VOTE) {
    case SUCCESS:
      return payloadPush(state, {
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
