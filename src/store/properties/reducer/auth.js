import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../actionTypes'

const auth = (state = { authorized: false, loading: false }, action = {}) => {
  switch (action.type) {
  case LOGIN_REQUEST:
  case SIGNUP_REQUEST:
    return {
      loading: true,
    }
  case LOGIN_SUCCESS:
  case SIGNUP_SUCCESS:
    return {
      authorized: true,
      loading: false,
      token: action.token,
      user: action.user,
    }
  case LOGIN_FAILURE:
  case SIGNUP_FAILURE:
    return {
      authorized: false,
      loading: false,
      reason: action.message,
    }
  default:
    return state
  }
}

export default auth

export const getAuth = state => state
