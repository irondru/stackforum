const { REACT_APP_API_ROOT }                = process.env
export const TOPICS                         = REACT_APP_API_ROOT + '/questions/'
export const ANSWER_CREATE                  = REACT_APP_API_ROOT + '/questions/{id}/answers'
export const ANSWERS                        = REACT_APP_API_ROOT + '/answers/'
export const ANSWERS_BEST                   = ANSWERS + '/{id}/best'
export const COMMENTS_CREATE_FOR_ANSWER     = ANSWERS + '/{id}/new_comment'
export const COMMENTS_CREATE_FOR_QUESTION   = TOPICS + '{id}/new_comment'
export const COMMENTS                       = REACT_APP_API_ROOT + '/comments'
export const VOTE_CHANGE_QUESTION           = TOPICS + '{id}/change_vote'
export const VOTE_CHANGE_ANSWER             = ANSWERS + '/{id}/change_vote'
