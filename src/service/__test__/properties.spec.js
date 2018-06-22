import properties from '../properties';
import defaultProperties from './defaultProperties';
import fetchMock from 'jest-fetch-mock';
global.fetch = fetchMock;

describe('service/properties', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('gets default properties with keys resaults and saved', async () => {
    fetch.mockResponse(JSON.stringify(defaultProperties));
    const response = await properties.getProperties();
    expect(Object.keys(response).sort()).toEqual(['results', 'saved'].sort());
  })

  it('handles http error', async () => {
    fetch.mockResponse(JSON.stringify({}), { status: 500 });
    let error;
    try{
      await properties.getProperties();
    }catch(e){
      error = e;
    }
    expect(error).toEqual(new Error('PropertyService getProperties failed, HTTP status 500'))
  })
})
