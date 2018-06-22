import searchResponse from '../searchResponse';
import defaultResponse from './defaultResponse';
import fetchMock from 'jest-fetch-mock';
global.fetch = fetchMock;

describe('service/properties', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('gets default searchResponse with keys resaults and saved', async () => {
    fetch.mockResponse(JSON.stringify(defaultResponse));
    const response = await searchResponse.getSearchResponse();
    expect(Object.keys(response).sort()).toEqual(['results', 'saved'].sort());
  })

  it('handles http error', async () => {
    fetch.mockResponse(JSON.stringify({}), { status: 500 });
    let error;
    try{
      await searchResponse.getSearchResponse();
    }catch(e){
      error = e;
    }
    expect(error).toEqual(new Error('PropertyService getProperties failed, HTTP status 500'))
  })
})
