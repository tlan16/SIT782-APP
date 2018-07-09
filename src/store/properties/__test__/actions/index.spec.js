import { Thunk } from 'redux-testkit';
import { PROPERTIES_FETCHED, FETCHPROPERTY_FAILURE ,ADD_TO_SAVED, REMOVE_FROM_SAVED } from '../../actionTypes';
import { fetchSearchResponse, addToSaved, removeFromSaved } from '../../actions/index';
import searchResponse from '../../../../service/searchResponse';
import { normalize } from 'normalizr';
import * as schema from '../../../../schema';
import defaultResponse from './defaultResponse';
jest.mock('../../../../service/searchResponse');

describe('store/properties/actions fetchSearchResponse', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetch properties from server and dispatch PROPERTIES_FETCHED after getting response', async () => {
    searchResponse.getSearchResponse.mockReturnValueOnce(defaultResponse);
    const dispatches = await Thunk(fetchSearchResponse).withState({listByColumn:{isFetching: false}}).execute();
    const response = normalize(defaultResponse, schema.responseSchema);
    const entities = response.entities;
    const lists = response.result;
    const properties = entities.properties;
    const agencies = entities.agencies
    expect(dispatches[1].isPlainObject()).toBe(true);
    expect(dispatches[1].getAction()).toEqual({ type: PROPERTIES_FETCHED, properties, lists , agencies});
  })

  it('fetch properties from server, dispatch FETCHPROPERTY_FAILURE and console error message when fail to get properties', async () => {
    searchResponse.getSearchResponse.mockImplementationOnce(() => { throw new Error('something is wrong');});
    console.error = jest.fn();
    const dispatches = await Thunk(fetchSearchResponse).withState({listByColumn:{isFetching: false}}).execute();
    expect(dispatches[1].getAction()).toEqual({
      type: FETCHPROPERTY_FAILURE,
      message:'something is wrong'
    })
    expect(console.error).toHaveBeenCalledWith(Error('something is wrong'))
  })
})

describe('store/properties/actions addToSaved', () => {
  it('add property to saved list', async () => {
    searchResponse.addToSavedService.mockReturnValueOnce('1')
    const id = '1';
    const dispatches = await Thunk(addToSaved).execute(id);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({ type: ADD_TO_SAVED, id});
  })
})

describe('store/properties/actions removeFromSaved',  () => {
  it('remove a property from saved list', async () => {
    const id = '1';
    searchResponse.removeFromSavedService.mockReturnValueOnce('1')
    const dispatches = await Thunk(removeFromSaved).execute(id);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({ type: REMOVE_FROM_SAVED, id});
  })
})




