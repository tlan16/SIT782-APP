import propertyById from '../reducer';
import { Reducer } from 'redux-testkit';
const initialState = {
    id: undefined,
    price: undefined,
    agency: undefined,
    mainImage: undefined,
    column: undefined
}
describe('store/property/reducer', () => {
  it('has an initial state', () => {
    expect(propertyById()).toEqual(initialState);
  })
  it('does not affect state', () => {
    Reducer(propertyById).expect({ type: 'NOT_EXITING' }).toReturnState(initialState);
  })

})