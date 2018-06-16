import properties from '../reducer';
import { Reducer } from 'redux-testkit'

const initialState = {
  byId: undefined,
  listByColumn: {
    results: [],
    saved:[]
  }
}

describe('store/properties/reducer', () => {
  it('should have initial state', () => {
    expect(properties()).toEqual(initialState);
  });
  it('should not affect state', () => {
    Reducer(properties).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })
})