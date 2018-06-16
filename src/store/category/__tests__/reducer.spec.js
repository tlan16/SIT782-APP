import category from '../reducer';
import { Reducer } from 'redux-testkit';

const initialState = {
  results: [],
  saved: []
}

describe('store/category/reducer', () => {
  it('has an initial state', () => {
    expect(category()).toEqual(initialState);
  })
  it('does not affect state', () => {
    Reducer(category).expect({type: 'NOT_EXITSTING'}).toReturnState(initialState);
  })
})