import root from '../reducers';
import { Reducer } from 'redux-testkit';

const initialState = {
  results: [],
  saved: []
}

describe('store/category/reducer', () => {
  it('has an initial state', () => {
    expect(root()).toEqual(initialState);
  })
  it('does not affect state', () => {
    Reducer(root).expect({type: 'NOT_EXITSTING'}).toReturnState(initialState);
  })
})