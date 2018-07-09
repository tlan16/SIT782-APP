import { Selector } from 'redux-testkit';
import { getById, getSavedProperties, getResultsProperties, getAgency } from '../../reducer';



const property1 = {
    price: 'price1',
    agency: 'agency1',
    id: '1',
    mainImage: 'image1'
};

const property2 = {
    price: 'price2',
    agency: 'agency2',
    id: '2',
    mainImage: 'image2'
};

const agency1 = {
    logo: 'logo1',
};

describe('getById store/properties/reducer/index', () => {

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
        };  
        const id = '1';
        Selector(getById).expect(state, id).toReturn(property1);
    });

});

describe('getSavedProperties store/properties/reducer/index', () => {
    it('gets saved properteis', () => {
        const state = {
            byId: {
                '1': property1,
                '2': property2
            },
            listByColumn: {
                errorMessage: null,
                isFetching: false,
                lists:{
                    saved: [1,2],
                    results: [1]
                }
            }
        };  
        const saved = state.listByColumn.lists.saved;
        Selector(getSavedProperties).expect(state).toReturn(saved);
    });
});

describe('getResultsProperties store/properties/index', () => {
    it('gets results properties', () => {
        const state = {
            byId: {
                '1': property1,
                '2': property2
            },
            listByColumn: {
                errorMessage: null,
                isFetching: false,
                lists:{
                    saved: [1,2],
                    results: [1]
                }
            }
        }; 
        const results = state.listByColumn.lists.results;
        Selector(getResultsProperties).expect(state).toReturn(results); 
    });

    describe('getAgency store/properties/index', () => {
        const state = {
            agency: {
                'logo1': agency1
            }
        };
        const logo = 'logo1';
        Selector(getAgency).expect(state, logo).toReturn(agency1);
    });
});