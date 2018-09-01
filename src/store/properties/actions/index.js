import { normalize } from 'normalizr'
import searchResponse from '../../../service/searchResponse'
import authResponse from '../../../service/authResponse'
import profileResponse from '../../../service/profileResponse'
import * as schema from '../../../schema'
import {
  PROPERTIES_FETCHED,
  FETCHPROPERTY_REQUEST,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  FETCHPROPERTY_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE,
} from '../actionTypes'
import { getIsFetching } from '../reducer'

export const fetchSearchResponse = () => async (dispatch, getState) => {
  try {
    if (getIsFetching(getState())) {
      return
    }
    dispatch({
      type: FETCHPROPERTY_REQUEST,
    })
    const responseData = await searchResponse.getSearchResponse()
    const response = normalize(responseData, schema.responseSchema)
    const entities = response.entities
    const properties = entities.properties
    const agencies = entities.agencies
    const lists = response.result
    dispatch({
      type: PROPERTIES_FETCHED,
      properties,
      lists,
      agencies,
    })
  } catch (error) {
    console.error(error)
    dispatch({
      type: FETCHPROPERTY_FAILURE,
      message: error.message || 'Something is wrong!',
    })
  }
}

export const fetchLoginResponse = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })

    const response = await authResponse.login(username, password)
    const {
      data: {
        accessToken: token,
        userDetails: user,
      },
    } = response

    dispatch({
      type: LOGIN_SUCCESS,
      token,
      user,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      message: error.message || 'Something is wrong!',
    })
    throw error
  }
}

export const fetchSignupResponse = (
  firstName,
  lastName,
  username,
  password,
) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    })
    const response = await authResponse.signUp(
      firstName,
      lastName,
      username,
      password,
    )
    const {
      data: {
        accessToken: token,
        userDetails: user,
      },
    } = response

    dispatch({
      type: SIGNUP_SUCCESS,
      token,
      user,
    })
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      message: error.message || 'Something is wrong!',
    })
    throw error
  }
}

export const fetchUpdateProfileResponse = (token, oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    })

    await profileResponse.updateProfile(token, oldPassword, newPassword)

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      message: error.message || 'Something is wrong!',
    })
    throw error
  }
}


export const addToSaved = id => async (dispatch) => {
  try {
    const addId = await searchResponse.addToSavedService(id)
    dispatch({
      type: ADD_TO_SAVED,
      id: addId,
    })
  } catch (error) {
    console.error(error)
  }
}


export const removeFromSaved = id => async (dispatch) => {
  try {
    const removeId = await searchResponse.removeFromSavedService(id)
    dispatch({
      type: REMOVE_FROM_SAVED,
      id: removeId,
    })
  } catch (error) {
    console.error(error)
  }
}

