import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';
import { getSavedProperties }  from '../../listByColumn';


const initialState = {
    results: [],
    saved:[] 
}

describe('store/properties/listByColumn', () => {
  it('gets empty array on initial state', () => {
    Selector(getSavedProperties).expect(initialState).toReturn([]);
  })
})