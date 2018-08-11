import { PROPERTIES_FETCHED } from '../actionTypes'

const byId = (state = {}, action = {}) => {
  switch (action.type) {
  case PROPERTIES_FETCHED:
    return action.properties
  default:
    return state
  }
}
export default byId

export const getById = (state, id) => state[id]
