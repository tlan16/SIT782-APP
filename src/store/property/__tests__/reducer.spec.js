import property from '../reducer';
import { Reducer } from 'redux-testkit';
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
  it('does not affect state', () => {
    Reducer(property).expect({ type: 'NOT_EXITING' }).toReturnState(initialState)
  })
})