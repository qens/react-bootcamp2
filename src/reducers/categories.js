import uniqueId from 'lodash/uniqueId';
import * as types from '../constants/action-types';

let initialState = [{
    id: '0',
    name: 'Category 1',
}, {
    id: '1',
    name: 'Category 2'
}, {
    id: '2',
    parentId: '1',
    name: 'Category 2 1'
}];


export const categories = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CATEGORY :
            return [{
                id: uniqueId('category'),
                name: action.name,
                parentId: action.parentId
            }, ...state];
        case types.REMOVE_CATEGORY:
            return state.filter(category => category.id !== action.id);
        case types.EDIT_CATEGORY:
            return state.map(category => (category.id === action.id
                ? Object.assign({}, category, {name: action.name}) : category));
        default:
            return state;
    }
};

