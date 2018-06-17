import  { PROPERTIES_FETCHED } from '../../actionTypes'
import { combineReducers } from "redux";
import byId from './byId';
import listByColumn from './listByColumn';


const properties = combineReducers({
  byId,
  listByColumn
})


export default properties