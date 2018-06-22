import propertyService from '../../../service/properties';
import * as schema from '../../../schema';
import { normalize } from 'normalizr';
import { PROPERTIES_FETCHED } from '../actionTypes';

export const fetchProperties = () => {
  return async(dispatch, getState) => {
     const responseData = await propertyService.getProperties();
     const response = normalize(responseData, schema.responseSchema);
     dispatch({ 
       type: PROPERTIES_FETCHED,
       response
      })
  }
}