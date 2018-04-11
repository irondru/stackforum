export const searchTopics = (query) =>
  createApiActions(API_SEARCH_PATH + query, GET, QUESTIONS + INDEX)
