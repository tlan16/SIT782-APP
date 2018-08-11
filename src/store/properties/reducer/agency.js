import { PROPERTIES_FETCHED } from '../actionTypes'

const agency = (state = {}, action = {}) => {
  switch (action.type) {
  case PROPERTIES_FETCHED:
    return action.agencies
  default:
    return state
  }
}
export default agency

export const getAgency = (state, logo) => state[logo]
