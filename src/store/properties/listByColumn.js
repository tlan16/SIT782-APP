import { PROPERTIES_FETCHED } from "../../actionTypes";

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
     default:
          return state;
   }
}
export default listByColumn