import { Thunk } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../actionTypes';
import { fetchSearchResponse } from '../../actions/index';
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
    const dispatches = await Thunk(fetchSearchResponse).execute();
    const response = normalize(defaultResponse, schema.responseSchema);
    const entities = response.entities;
    const lists = response.result;
    const properties = entities.properties;
    const agencies = entities.agencies
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({ type: PROPERTIES_FETCHED, properties, lists , agencies});
  })

  it('fetch properties from server', async () => {
    searchResponse.getSearchResponse.mockImplementationOnce(() => { throw new Error('something is wrong');});
    console.error = jest.fn();
    const dispatches = await Thunk(fetchSearchResponse).execute();
    expect(dispatches.length).toBe(0);
    expect(console.error).toHaveBeenCalledWith(Error('something is wrong'))
  })
})
