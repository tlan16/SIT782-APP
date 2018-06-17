import properties from '../reducer';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../../actionTypes';
import Immutable from 'seamless-immutable';


const initialState = {
  byId: {},
  listByColumn: {
    results: [],
    saved:[]
  }
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

describe('store/properties/reducer', () => {
  it('should have initial state', () => {
    expect(properties()).toEqual(initialState);
  });

  it('should not affect state', () => {
    Reducer(properties).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })

})