import searchResponse from '../searchResponse';
import defaultResponse from './defaultResponse';
import fetchMock from 'jest-fetch-mock';
global.fetch = fetchMock;

describe('getSearchResponse service/properties', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('gets default searchResponse with keys resaults and saved', async () => {
        fetch.mockResponse(JSON.stringify(defaultResponse));
        const response = await searchResponse.getSearchResponse();
        expect(Object.keys(response).sort()).toEqual(['results', 'saved'].sort());
    });

    it('handles http error', async () => {
        fetch.mockResponse(JSON.stringify({}), { status: 500 });
        let error;
        try{
            await searchResponse.getSearchResponse();
        }catch(e){
            error = e;
        }
        expect(error).toEqual(new Error('searchResponse getSearchResponse failed, HTTP status 500'));
    });
});

describe('addToSavedService service/properties' , () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('post id to add to saved', async () => {
        const testResponse = {addId: '1'};
        fetch.mockResponse(JSON.stringify(testResponse));
        const addId = await searchResponse.addToSavedService('1');
        expect(addId).toBe('1');
    });

    it('handles http error', async () => {
        fetch.mockResponse(JSON.stringify({}), { status: 500 });
        let error;
        try{
            await searchResponse.addToSavedService('1');
        }catch(e){
            error = e;
        }
        expect(error).toEqual(new Error('addToSavedResponse addToSavedService failed, HTTP status 500'));
    });

});

describe('removeFromSavedService service/properties' , () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('post id to remove from saved', async () => {
        const testResponse = {removeId: '1'};
        fetch.mockResponse(JSON.stringify(testResponse));
        const removeId = await searchResponse.removeFromSavedService('1');
        expect(removeId).toBe('1');
    });

    it('handles http error', async () => {
        fetch.mockResponse(JSON.stringify({}), { status: 500 });
        let error;
        try{
            await searchResponse.removeFromSavedService('1');
        }catch(e){
            error = e;
        }
        expect(error).toEqual(new Error('removeFromSavedResponse removeFromSavedService failed, HTTP status 500'));
    });

});
