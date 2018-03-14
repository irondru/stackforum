export const GET = 'GET'
export const POST = 'POST'
export const PATCH = 'PATCH'
export const DELETE = 'DELETE'
const PREFIX = '/api/v1/'
export const ID = '{id}'
export const API_TOPICS_PATH = PREFIX + 'questions/'
export const API_ANSWER_CREATE_PATH = API_TOPICS_PATH + '{questionId}/answers'
export const API_SIGN_IN_PATH = PREFIX + 'users/sign_in'
export const API_SIGN_UP_PATH = PREFIX + 'users/sign_up'
export const API_SIGN_OUT_PATH = PREFIX + 'users/sign_out'
export const API_PROFILE_PATH = PREFIX + 'profile'
export const API_ANSWERS_PATH = PREFIX + 'answers/'
export const API_COMMENTS_CREATE_ANSWER_PATH = API_ANSWERS_PATH + ID + '/new_comment'
export const API_COMMENTS_CREATE_QUESTION_PATH = API_TOPICS_PATH + ID +'/new_comment'
export const API_COMMENTS_PATH = PREFIX + 'comments/'
export const API_QUESTION_VOTE_CHANGE_PATH = API_TOPICS_PATH + ID + '/change_vote'
export const API_ANSWER_VOTE_CHANGE_PATH = API_ANSWERS_PATH + ID + '/change_vote' 
