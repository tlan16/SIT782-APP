import { PROPERTIES_FETCHED, ADD_TO_SAVED } from "../../actionTypes";

const initialState = {
  results: [],
  saved:[]
}
const listByColumn = ( state = initialState, action = {} ) => {
   switch( action.type ){
     case PROPERTIES_FETCHED:
          const resultsArray = action.resultsArray;
          const savedArray = action.savedArray;
          
          return {
            results: resultsArray.map( property => property.id ),
            saved: savedArray.map( property => property.id )
          }
     case ADD_TO_SAVED:
          const id = action.id;
          return {
            ...state,
            saved: [...state.saved, id]
          }
     default:
          return state;
   }
}
export default listByColumn