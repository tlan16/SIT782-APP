import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';
import { getSavedProperties, getResultsProperties }  from '../../reducer/listByColumn';

const initialState = {
    results: [],
    saved:[] 
}

describe('store/properties/reducer/listByColumn', () => {
  it('gets empty array on initial state', () => {
    Selector(getSavedProperties).expect(initialState).toReturn([]);
  })

  it('gets the saved list', () => {
    const state = {
      results: [1,2],
      saved: [2]
    }
    Selector(getSavedProperties).expect(state).toReturn([2]);
  })

  it('gets empty array on initial state', () => {
    Selector(getResultsProperties).expect(initialState).toReturn([]);
  })
  
  it('gets the saved list', () => {
    const state = {
      results: [1,2],
      saved: [2]
    }
    Selector(getResultsProperties).expect(state).toReturn([1,2]);
  })

})