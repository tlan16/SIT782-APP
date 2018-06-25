import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FlushThunks } from 'redux-testkit';
import defaultResponse from './actions/defaultResponse';

import reducer, { getAgency, getById, getResultsProperties, getSavedProperties } from '../reducer/index';
import searchResponse from '../../../service/searchResponse';
import { fetchSearchResponse, addToSaved, removeFromSaved } from '../actions';

jest.mock('../../../service/searchResponse');

describe('store/properties integration', () => {
  let flushThunks, store;

  beforeEach(() => {
    jest.resetAllMocks();
    flushThunks = FlushThunks.createMiddleware();
    store = createStore(reducer, applyMiddleware(flushThunks, thunk));
  });

  it(' fetches searchResponse and add and remove properties from savedList ', async () => {
    searchResponse.getSearchResponse.mockReturnValueOnce(defaultResponse);
    await store.dispatch(fetchSearchResponse());
    expect(getSavedProperties(store.getState())).toEqual(['4']);
    expect(getResultsProperties(store.getState())).toEqual(['1', '2', '3']);

    store.dispatch(addToSaved('1'));
    expect(getSavedProperties(store.getState())).toEqual(['4','1']);
    store.dispatch(removeFromSaved('1'));
    expect(getSavedProperties(store.getState())).toEqual(['4']);
  }) 
})