import { FETCH_ALL_PROPERTIES }from '../../actionTypes'

const initialState = {
  results: [],
  saved: []
}

const createResultList = allProperties => allProperties.results;

const createSavedList = allProperties => allProperties.saved;

const listByColumn = (state = initialState, action = {}) => {
  switch(action.type){
    case  FETCH_ALL_PROPERTIES:
       return {
         results: createResultList(action.allProperties),
         saved: createSavedList(action.allProperties)
       }
    default:
       return state;
  }
  
}
export default listByColumn