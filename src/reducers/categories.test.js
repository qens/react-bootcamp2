import {categories} from "./categories"
import * as types from "../constants/action-types";

jest.mock('lodash/uniqueId', () => jest.fn(() => 'generatedId'));

describe('Categories reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = [{id: '0', name: 'Test category'}];
        Object.freeze(initialState);
    });

    it('should return the untouched initialState', () => {
        expect(categories(initialState, {})).toEqual(initialState);
    });

    it('should add category', () => {
        const name = 'Added category',
            parentId = '0';
        expect(categories(initialState, {
            type: types.ADD_CATEGORY,
            name, parentId
        })).toEqual([{id: 'generatedId', name, parentId},
            {id: '0', name: 'Test category'}
        ]);
    });

    it('should remove category', () => {
        const id = '0';
        expect(categories(initialState, {
            type: types.REMOVE_CATEGORY,
            id
        })).toEqual([]);
    });

    it('should edit category', () => {
        const id = '0', name = 'Edited test category';
        expect(categories(initialState, {
            type: types.EDIT_CATEGORY,
            id, name
        })).toEqual([{id, name}]);
    })
});