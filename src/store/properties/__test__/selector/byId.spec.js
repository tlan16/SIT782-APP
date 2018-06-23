import { Selector } from 'redux-testkit';
import { getById } from '../../reducer/byId';

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

describe('store/properties/reducer/byId', () => {
  it('gets property by id', () => {
    const state = {
      '1': property1,
      '2': property2
    }
    const id = '1'
    Selector(getById).expect(state, id).toReturn(property1);
  })

})