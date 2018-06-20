import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';
import { getById, getSavedProperties, getResultsProperties } from '../../index';

const initialState = {
  byId: {},
  listByColumn: {
    results: [],
    saved:[]
  }
}

const property1 = {
  price: 'price1',
  agency: 'agency1',
  id: '1',
  mainImage: 'image1'
}

const property2 = {
  price: 'price2',
  agency: 'agency2',
  id: '2',
  mainImage: 'image2'
}

describe('getById store/properties/index', () => {

  it('gets property by id', () => {
   const state = {
     byId: {
       '1': property1,
       '2': property2
     },
     listByColumn: {
       saved: [1,2],
       results: [1]
     }
   }  
   const id = '1'
   Selector(getById).expect(state, id).toReturn(property1);
  })

})

describe('getSavedProperties store/properties/index', () => {
  it('gets saved properteis', () => {
    const state = {
      byId: {
        '1': property1,
        '2': property2
      },
      listByColumn: {
        saved: [1,2],
        results: [1]
      }
    }  
    const saved = state.listByColumn.saved;
    Selector(getSavedProperties).expect(state).toReturn(saved);
   })
})

describe('getResultsProperties store/properties/index', () => {
  it('gets results properties', () => {
    const state = {
      byId: {
        '1': property1,
        '2': property2
      },
      listByColumn: {
        saved: [1,2],
        results: [1]
      }
    } 
    const results = state.listByColumn.results;
    Selector(getResultsProperties).expect(state).toReturn(results); 
  })
})