import listByColumn, { lists } from '../../reducer/listByColumn';
import { Reducer } from 'redux-testkit';
import {
    PROPERTIES_FETCHED,
    ADD_TO_SAVED,
    REMOVE_FROM_SAVED
} from '../../actionTypes';
import Immutable from 'seamless-immutable';

const initialState = {
    errorMessage: null,
    isFetching: false,
    lists: {
        results: [],
        saved: []
    }
};

describe('store/properties/reducer/listByColumn', () => {
    it('has initial state', () => {
        expect(listByColumn()).toEqual(initialState);
    });

    it('does not affect state', () => {
        Reducer(listByColumn)
            .expect({ type: 'NOT_EXISTING' })
            .toReturnState(initialState);
    });
});

describe('list store/properties/reducer/listByColumn', () => {
    it('stores fectched properties in a list of ids', () => {
        const fetchedLists = { saved: [1, 3], results: [2] };
        const action = { type: PROPERTIES_FETCHED, lists: fetchedLists };
        const returnState = { results: [2], saved: [1, 3] };
        Reducer(lists)
            .expect(action)
            .toReturnState(returnState);
    });

    it('stores fetched properties and override existing properties in both lists', () => {
        const fetchedLists = {
            results: ['3'],
            saved: ['1']
        };
        const action = { type: PROPERTIES_FETCHED, lists: fetchedLists };
        const oldState = Immutable({
            results: ['1'],
            saved: ['2']
        });
        const newState = {
            results: ['3'],
            saved: ['1']
        };
        Reducer(lists)
            .withState(oldState)
            .expect(action)
            .toReturnState(newState);
    });

    it('add the id to savedList when adding to saved ', () => {
        const id = '1';
        const action = { type: ADD_TO_SAVED, id };
        const oldState = Immutable({
            results: ['1'],
            saved: ['2']
        });
        const newState = {
            results: ['1'],
            saved: ['2', '1']
        };
        Reducer(lists)
            .withState(oldState)
            .expect(action)
            .toReturnState(newState);
    });

    it('remove the id from savedList when removing to saved', () => {
        const id = '2';
        const action = { type: REMOVE_FROM_SAVED, id };
        const oldState = Immutable({
            results: ['1'],
            saved: ['2']
        });
        const newState = {
            results: ['1'],
            saved: []
        };
        Reducer(lists)
            .withState(oldState)
            .expect(action)
            .toReturnState(newState);
    });

    it('returns the old state if the property to remove does not exist', () => {
        const id = '1';
        const action = { type: REMOVE_FROM_SAVED, id };
        const oldState = Immutable({
            results: ['1'],
            saved: ['2']
        });
        Reducer(lists)
            .withState(oldState)
            .expect(action)
            .toReturnState(oldState);
    });
});
