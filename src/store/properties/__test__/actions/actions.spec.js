import { Thunk } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../actionTypes';
import { fetchProperties } from '../../actions/property';
import propertyService from '../../../../service/properties';
import { normalize } from 'normalizr';
import * as schema from '../../../../schema';

jest.mock('../../../../service/properties');

describe('store/properties/actions', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetch properties from server', async () => {
    const defaultResponse = require('./defaultResponse.json');
    propertyService.getProperties.mockReturnValueOnce(defaultResponse);
    const dispatches = await Thunk(fetchProperties).execute();
    const resultsArray = normalize(defaultResponse.results, schema.arrayOfProperties);
    const savedArray = normalize(defaultResponse.saved, schema.arrayOfProperties);
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({ type: PROPERTIES_FETCHED, resultsArray, savedArray });
  })
})
