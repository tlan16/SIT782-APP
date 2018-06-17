import  { PROPERTIES_FETCHED } from '../../actionTypes'

const byId = (state = {}, action = {}) => {
     switch(action.type){
       case PROPERTIES_FETCHED:
          const resultsArray = action.resultsArray;
          const savedArray = action.savedArray;

          const resultsObject = resultsArray.reduce((acc, value) => {
              const id = value.id;
              acc[id] = value
              return acc;
          }, {});

          const savedObject = savedArray.reduce((acc, value) => {
            const id = value.id;
            acc[id] = value
            return acc;
          }, {})
          return {
            ...resultsObject,
            ...savedObject
          };

        default:
           return state;
     }
     
}
export default byId