import properties from '../reducer';

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
  })
})