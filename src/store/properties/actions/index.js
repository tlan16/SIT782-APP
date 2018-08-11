import { normalize } from 'normalizr'
import searchResponse from '../../../service/searchResponse'
import authResponse from '../../../service/authResponse'
import * as schema from '../../../schema'
import {
  PROPERTIES_FETCHED,
  FETCHPROPERTY_REQUEST,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  FETCHPROPERTY_FAILURE,
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST,
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

export const fetchAuthResponse = (username, password) => async (dispatch, getState) => {
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
    console.error(error)
    dispatch({
      type: LOGIN_FAILURE,
      message: error.message || 'Something is wrong!',
    })
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

