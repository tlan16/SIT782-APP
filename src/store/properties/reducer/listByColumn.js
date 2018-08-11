import { combineReducers } from 'redux'
import {
  PROPERTIES_FETCHED,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  FETCHPROPERTY_REQUEST,
  FETCHPROPERTY_FAILURE,
} from '../actionTypes'
import Immutable from 'seamless-immutable'

const listsInitialState = Immutable({
  results: [],
  saved: [],
})

export const lists = (state = listsInitialState, action = {}) => {
  switch (action.type) {
  case PROPERTIES_FETCHED:
    return action.lists

  case ADD_TO_SAVED:
    const idToAdd = action.id
    if (state.saved.indexOf(idToAdd) == -1) {
      return {
        ...state,
        saved: [...state.saved, idToAdd],
      }
    }
    return state

  case REMOVE_FROM_SAVED:
    const idToDelete = action.id
    const indexToDelete = state.saved.indexOf(idToDelete)
    const savedList = state.saved
    if (indexToDelete == -1) return state
    return {
      ...state,
      saved: [
        ...savedList.slice(0, indexToDelete),
        ...savedList.slice(indexToDelete + 1),
      ],
    }
  default:
    return state
  }
}

export const isFetching = (state = false, action = {}) => {
  switch (action.type) {
  case FETCHPROPERTY_REQUEST:
    return true
  case PROPERTIES_FETCHED:
    return false
  case FETCHPROPERTY_FAILURE:
    return false
  default:
    return state
  }
}

export const errorMessage = (state = null, action = {}) => {
  switch (action.type) {
  case FETCHPROPERTY_FAILURE:
    return action.message
  case FETCHPROPERTY_REQUEST:
  case PROPERTIES_FETCHED:
    return null
  default:
    return state
  }
}

const listByColumn = combineReducers({
  lists,
  isFetching,
  errorMessage,
})

export default listByColumn

export const getSavedProperties = state => state.lists.saved

export const getResultsProperties = state => state.lists.results

export const getIsFetching = state => state.isFetching

export const getErrorMessage = state => state.errorMessage
