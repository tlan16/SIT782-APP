import byId from '../byId';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../../actionTypes';
import Immutable from 'seamless-immutable';

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
const initialState = {}

describe('store/properties/byId', () => {
  it('should have initial state', () => {
    expect(byId()).toEqual({});
  });

  it('should not affect state', () => {
    Reducer(byId).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })

  it('should store fetched properties in an object', () => {
    const response = sampleResponse;
    const action = { type: PROPERTIES_FETCHED, response };
    const returnState =  { '1': { ...property1, column: 'results' }, '2': { ...property2, column:'saved' } };
    Reducer(byId).expect(action).toReturnState(returnState);
  })
})