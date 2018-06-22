import searchResponse from '../../../service/searchResponse';
import * as schema from '../../../schema';
import { normalize } from 'normalizr';
import { PROPERTIES_FETCHED } from '../actionTypes';

export const fetchProperties = () => {
  return async(dispatch, getState) => {
     const responseData = await searchResponse.getSearchResponse();
     const response = normalize(responseData, schema.responseSchema);
     dispatch({ 
       type: PROPERTIES_FETCHED,
       response
      })
  }
}