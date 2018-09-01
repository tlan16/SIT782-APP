import {
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS,
} from '../actionTypes';

const profile = (state = { }, action = {}) => {
  switch (action.type) {
  case UPDATE_PROFILE_REQUEST:
    return {
      loading: true,
    }
  case UPDATE_PROFILE_SUCCESS:
    return {
      loading: false,
      success: true,
    }
  case UPDATE_PROFILE_FAILURE:
    return {
      loading: false,
      success: false,
      reason: action.message,
    }
  default:
    return {
      loading: false,
      success: true,
    }
  }
}

export default profile

export const getProfile = state => state
