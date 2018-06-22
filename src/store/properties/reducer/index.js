import { combineReducers } from "redux";
import byId, * as fromById from './byId';
import listByColumn, * as fromListByColumn from './listByColumn';

const properties = combineReducers({
  byId,
  listByColumn
})

export default properties;

export const getById = (state, id) => {
   return fromById.getById(state.byId, id)
}

export const getSavedProperties = (state) => {
   return fromListByColumn.getSavedProperties(state.listByColumn)
}

export const getResultsProperties = (state) => {
  return fromListByColumn.getResultsProperties(state.listByColumn)
}