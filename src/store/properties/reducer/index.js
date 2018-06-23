import { combineReducers } from "redux";
import byId, * as fromById from './byId';
import listByColumn, * as fromListByColumn from './listByColumn';
import agency, * as fromAgency from './agency';

const properties = combineReducers({
  byId,
  listByColumn,
  agency
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

export const getAgency = (state, logo) => {
  return fromAgency.getAgency(state.agency, logo)
}