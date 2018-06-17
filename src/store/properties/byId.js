import  { PROPERTIES_FETCHED } from '../../actionTypes'

const byId = (state = {}, action = {}) => {
     switch(action.type){
       case PROPERTIES_FETCHED:
          const resultsArray = action.resultsArray;
          const savedArray = action.savedArray;

          const resultsObject = resultsArray.reduce((acc, value) => {
              const id = value.id;
              acc[id] = {...value, column: 'results'}
              return acc;
          }, {});

          const combination = savedArray.reduce((acc, value) => {
              const id = value.id;
              if(acc[id]){
                acc[id] = {...value, column: 'both'}
              }else{
                acc[id] = {...value, column: 'saved'}
              }
              return acc;
          }, resultsObject)
          return combination;

        default:
           return state;
     }
     
}
export default byId