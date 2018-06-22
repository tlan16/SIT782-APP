import byId from '../../reducer/byId';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../actionTypes';
import Immutable from 'seamless-immutable';


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

const properties = {
  '1': property1,
  '2': property2,
}

const initialState = {}

describe('store/properties/reducer/byId', () => {
  it('should have initial state', () => {
    expect(byId()).toEqual({});
  });

  it('should not affect state', () => {
    Reducer(byId).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  })

  it('should store fetched properties in an object', () => {
    const action = { type: PROPERTIES_FETCHED, properties };
    const returnState =  { '1': property1, '2': property2 };
    Reducer(byId).expect(action).toReturnState(returnState);
  })

  it('should store fetched properties and override existing properties in an object', () => {
   const action = { type: PROPERTIES_FETCHED, properties: { '3': property3, '1': property1 } };
   const oldState = Immutable({ '1': property1, '2': property2 });
   const newState = { '3': property3, '1': property1 }
   Reducer(byId).withState(oldState).expect(action).toReturnState(newState);
  })

   
})