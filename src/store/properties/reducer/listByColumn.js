import {
  PROPERTIES_FETCHED,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED
} from "../actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  results: [],
  saved: []
});

const listByColumn = (state = initialState, action = {}) => {
  switch (action.type) {
    case PROPERTIES_FETCHED:
      return action.lists;

    case ADD_TO_SAVED:
      const idToAdd = action.id;
      if (state.saved.indexOf(idToAdd) == -1)
        return {
          ...state,
          saved: [...state.saved, idToAdd]
        };
      else return state;

    case REMOVE_FROM_SAVED:
      const idToDelete = action.id;
      const indexToDelete = state.saved.indexOf(idToDelete);
      const savedList = state.saved;
      if (indexToDelete == -1) return state;
      return {
        ...state,
        saved: [
          ...savedList.slice(0, indexToDelete),
          ...savedList.slice(indexToDelete + 1)
        ]
      };
    default:
      return state;
  }
};
export default listByColumn;

export const getSavedProperties = state => {
  return state.saved;
};
export const getResultsProperties = state => {
  return state.results;
};
