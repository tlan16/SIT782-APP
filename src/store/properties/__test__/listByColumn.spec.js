import listByColumn from '../listByColumn';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../../actionTypes';
import Immutable from 'seamless-immutable';

const initialState = {
  results: [],
  saved:[]
}

const property1 = {
  price: 'price1',
  agency: 'agency1',
  id: '1',
  mainImage: 'image1'
}

const property2 = {
  price: 'price2',
  agency: 'agency2',
  id: '2',
  mainImage: 'image2'
}

const sampleResponse = {
  results: [property1],
  saved: [property2]
}

describe('store/properties/listByColumn', () => {
  it('should have initial state', () => {
    expect(listByColumn()).toEqual(initialState);
  });
  it('should not affect state', () => {
    Reducer(listByColumn).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })
  it('should store fectched properties in a list of ids', () => {
    const response = sampleResponse;
    const savedArray = response.saved;
    const resultsArray = response.results;
    const action = { type: PROPERTIES_FETCHED, savedArray, resultsArray };
    const returnState = {
          results: ['1'],
          saved: ['2']
  }
    Reducer(listByColumn).expect(action).toReturnState(returnState)
  })


})