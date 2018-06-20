import properties from '../properties';
global.fetch = require('jest-fetch-mock');

describe('service/properties', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('gets default properties with keys resaults and saved', async () => {
    const defaultProperties = require('./defaultProperties.json');
    fetch.mockResponse(JSON.stringify(defaultProperties));
    const response = await properties.getProperties();
    expect(Object.keys(response).sort()).toEqual(['results', 'saved'].sort());
  })
})
