import { Thunk } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../actionTypes';
import { fetchProperties } from '../../actions/property';
import searchResponse from '../../../../service/searchResponse';
import { normalize } from 'normalizr';
import * as schema from '../../../../schema';
import defaultResponse from './defaultResponse';
jest.mock('../../../../service/searchResponse');

describe('store/properties/actions', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetch properties from server', async () => {
    searchResponse.getSearchResponse.mockReturnValueOnce(defaultResponse);
    const dispatches = await Thunk(fetchProperties).execute();
    const response = normalize(defaultResponse, schema.responseSchema);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({ type: PROPERTIES_FETCHED, response });
  })
})
