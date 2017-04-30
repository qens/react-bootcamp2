import uniqueId from 'lodash/uniqueId';
import * as types from '../constants/action-types';

let initialState = [{
    id: uniqueId(),
    categoryId: 0,
    name: 'Task 1 1',
    done: false,
    description: ''
}, {
    id: uniqueId(),
    categoryId: 0,
    name: 'Task 1 2',
    done: false,
    description: ''
}, {
    id: uniqueId(),
    categoryId: 1,
    name: 'Task 2 1',
    done: false,
    description: 'Task 2 1'
}, {
    id: uniqueId(),
    categoryId: 1,
    name: 'Task 2 2',
    done: true,
    description: 'Task 2 2'
}, {
    id: uniqueId(),
    categoryId: 2,
    name: 'Task 2 1 1',
    done: false,
    description: ''
}, {
    id: uniqueId(),
    categoryId: 2,
    name: 'Task 2 1 2',
    done: false,
    description: ''
}];

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return [{
                id: uniqueId('task'),
                categoryId: action.categoryId,
                name: action.name,
                done: false,
                description: ''
            }, ...state];
        default:
            return state;
    }
};