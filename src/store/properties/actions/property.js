import propertyService from '../../../service/properties';
import * as schema from '../../../schema';
import { normalize } from 'normalizr';
import { PROPERTIES_FETCHED } from '../actionTypes';

export const fetchProperties = () => {
  return async(dispatch, getState) => {
     const response = await propertyService.getProperties();
     const resultsArray = normalize(response.results, schema.arrayOfProperties);
     const savedArray = normalize(response.saved, schema.arrayOfProperties);
     dispatch({ 
       type: PROPERTIES_FETCHED,
       resultsArray,
       savedArray
      })
  }
}