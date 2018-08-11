import { LOGIN_SUCCESS } from '../actionTypes'

const auth = (state = {}, action = {}) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      token: action.token,
      user: action.user,
    }
  default:
    return state
  }
}

export default auth

export const getAuth = state => state
