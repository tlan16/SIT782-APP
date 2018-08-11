import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import listByColumn, * as fromListByColumn from './listByColumn'
import agency, * as fromAgency from './agency'

const properties = combineReducers({
  byId,
  listByColumn,
  agency,
})

export default properties

export const getById = (state, id) => fromById.getById(state.byId, id)

export const getSavedProperties = state => fromListByColumn.getSavedProperties(state.listByColumn)

export const getResultsProperties = state => fromListByColumn.getResultsProperties(state.listByColumn)

export const getErrorMessage = state => fromListByColumn.getErrorMessage(state.listByColumn)

export const getIsFetching = state => fromListByColumn.getIsFetching(state.listByColumn)

export const getAgency = (state, logo) => fromAgency.getAgency(state.agency, logo)
