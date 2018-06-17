import listByColumn from '../listByColumn';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED, ADD_TO_SAVED } from '../../../actionTypes';
import Immutable from 'seamless-immutable';

const initialState = {
  results: [],
  saved:[]
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

const property3 = {
  price: 'price3',
  agency: 'agency3',
  id: '3',
  mainImage: 'image3'
}

const sampleResponse = {
  results: [property1],
  saved: [property2]
}

const sampleResponse1 = {
  results: [property3],
  saved: [property1]
}

const sampleResponse2 = {
  results: [property1, property3],
  saved: [property1]
}

describe('store/properties/listByColumn', () => {
  it('should have initial state', () => {
    expect(listByColumn()).toEqual(initialState);
  });

  it('should not affect state', () => {
    Reducer(listByColumn).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })

  it('should store fectched properties in a list of ids', () => {
    const response = sampleResponse;
    const savedArray = response.saved;
    const resultsArray = response.results;
    const action = { type: PROPERTIES_FETCHED, savedArray, resultsArray };
    const returnState = {
          results: ['1'],
          saved: ['2']
  }
    Reducer(listByColumn).expect(action).toReturnState(returnState)
  })

  it('should store fetched properties and override existing properties in both lists', () => {
    const response = sampleResponse1;
    const savedArray = response.saved;
    const resultsArray = response.results;
    const action = { type: PROPERTIES_FETCHED, savedArray, resultsArray };
    const oldState = Immutable({
      results: ['1'],
      saved: ['2']
})
    const newState = {
      results: ['3'],
      saved: ['1']
    }
    Reducer(listByColumn).withState(oldState).expect(action).toReturnState(newState);
   })

   it('add the id to savedList when adding to saved ', () => {
     const id = '1';
     const action = { type: ADD_TO_SAVED, id };
     const oldState = Immutable({
      results: ['1'],
      saved: ['2']
       })
      const newState = {
        results: ['1'],
        saved: ['2', '1']
      }  
      Reducer(listByColumn).withState(oldState).expect(action).toReturnState(newState);
   })

})