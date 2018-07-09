import agency from '../../reducer/agency';
import { Reducer } from 'redux-testkit';
import { PROPERTIES_FETCHED } from '../../actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({});

const agency1 = {
    logo: 'logo1',
};
const agency2 = {
    logo: 'logo2'
};
const agency3 = {
    logo: 'logo3'
};

describe('store/properties/reducer/agency', () => {
    it('should have initial state', () => {
        expect(agency()).toEqual({});
    });

    it('should not affect state', () => {
        Reducer(agency).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });

    it('should store fetched agencies in an object', () => {
        const agencies = { 'logo1': agency1, 'logo2': agency2 };
        const action = { type: PROPERTIES_FETCHED, agencies };
        const returnState =  { 'logo1': agency1, 'logo2': agency2 };
        Reducer(agency).expect(action).toReturnState(returnState);
    });

    it('should store fetched agencies and override existing properties in an object', () => {

        const action =  { type: PROPERTIES_FETCHED, agencies: {'logo3': agency3 }};
        const oldState = Immutable({ 'logo1': agency1, 'logo2': agency2 });
        const newState = { 'logo3': agency3 };
        Reducer(agency).withState(oldState).expect(action).toReturnState(newState);
    });
});