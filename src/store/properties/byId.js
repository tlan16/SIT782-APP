import  { PROPERTIES_FETCHED } from '../../actionTypes'

const byId = (state = {}, action = {}) => {
     switch(action.type){
       case PROPERTIES_FETCHED:
          const resultsArray = action.response.results;
          const savedArray = action.response.saved;

          const resultsObject = resultsArray.reduce((acc, value) => {
              const id = value.id;
              acc[id] = {...value, column: 'results'}
              return acc;
          }, {});

          const savedObject = savedArray.reduce((acc, value) => {
              const id = value.id;
              acc[id] = {...value, column: 'saved'}
              return acc;
          }, {})
          return {
            ...state,
            ...savedObject,
            ...resultsObject
          }
        default:
           return state;
     }
     
}
export default byId