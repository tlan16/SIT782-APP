import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import listByColumn, * as fromListByColumn from './listByColumn'
import agency, * as fromAgency from './agency'
import auth, * as fromAuth from './auth'
import profile, * as fromProfile from './profile'

const properties = combineReducers({
  byId,
  listByColumn,
  agency,
  auth,
  profile,
})

export default properties

export const getById = (state, id) => fromById.getById(state.byId, id)

export const getSavedProperties = state => fromListByColumn.getSavedProperties(state.listByColumn)

export const getResultsProperties = state => fromListByColumn.getResultsProperties(state.listByColumn)

export const getErrorMessage = state => fromListByColumn.getErrorMessage(state.listByColumn)

export const getIsFetching = state => fromListByColumn.getIsFetching(state.listByColumn)

export const getAgency = (state, logo) => fromAgency.getAgency(state.agency, logo)

export const getAuth = state => fromAuth.getAuth(state.auth)

export const getProfile = state => fromProfile.getProfile(state.profile)
