import category from '../reducer';

const initialState = {
  results: [],
  saved: []
}

describe('store/category/reducer', () => {
  it('has an initial state', () => {
    expect(category()).toEqual(initialState);
  })
})