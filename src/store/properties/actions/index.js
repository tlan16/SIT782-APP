import searchResponse from '../../../service/searchResponse';
import * as schema from '../../../schema';
import { normalize } from 'normalizr';
import { PROPERTIES_FETCHED, FETCHPROPERTY_REQUEST, ADD_TO_SAVED, REMOVE_FROM_SAVED, FETCHPROPERTY_FAILURE } from '../actionTypes';
import { getIsFetching } from '../reducer'

export const fetchSearchResponse = () => {
  return async (dispatch, getState) => {
     try{
     if(getIsFetching(getState())){
       return 
     }
     dispatch({
       type: FETCHPROPERTY_REQUEST
     })
     const responseData = await searchResponse.getSearchResponse();
     const response = normalize(responseData, schema.responseSchema);
     const entities = response.entities;
     const properties = entities.properties;
     const agencies = entities.agencies;
     const lists = response.result;
     dispatch({ 
       type: PROPERTIES_FETCHED,
       properties,
       lists,
       agencies
      })
    }catch(error){
      console.error(error);
      dispatch({
        type: FETCHPROPERTY_FAILURE,
        message: error.message || 'Something is wrong!'
      })
    }
  }
}

export const addToSaved = (id) => {
  return async dispatch => {
    try{
      const addId = await searchResponse.addToSavedService(id);
      dispatch({
        type: ADD_TO_SAVED,
        id: addId
      })
    }catch(error){
      console.error(error)
    }
    
  }
}


export const removeFromSaved = (id) => {
  return async dispatch => {
    try{
      const removeId = await searchResponse.removeFromSavedService(id);
      dispatch({
        type: REMOVE_FROM_SAVED,
        id: removeId
      })
    }catch(error){
      console.log(error)
    }
  }
}

