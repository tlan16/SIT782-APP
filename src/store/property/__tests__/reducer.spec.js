import property from '../reducer';

const initialState = {
    id: undefined,
    price: undefined,
    agency: undefined,
    mainImage: undefined,
    saved: false,
}
describe('store/property/reducer', () => {
  it('has an initial state', () => {
    expect(property()).toEqual(initialState);
  })
})