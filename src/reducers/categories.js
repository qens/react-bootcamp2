import uniqueId from 'lodash/uniqueId';
import * as types from '../constants/action-types';

let initialState = [
    {
        id: uniqueId(),
        name: 'Category 1',
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 1 1',
                done: false,
                description: ''
            },
            {
                id: uniqueId(),
                name: 'Task 1 2',
                done: false,
                description: ''
            }
        ]
    }, {
        id: uniqueId(),
        name: 'Category 2',
        categories: [{
            id: uniqueId(),
            name: 'Category 2 1',
            tasks: [
                {
                    id: uniqueId(),
                    name: 'Task 2 1 1',
                    done: false,
                    description: ''
                },
                {
                    id: uniqueId(),
                    name: 'Task 2 1 2',
                    done: false,
                    description: ''
                }
            ]
        }],
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 2 1',
                done: false,
                description: 'Task 2 1'
            },
            {
                id: uniqueId(),
                name: 'Task 2 2',
                done: true,
                description: 'Task 2 2'
            }
        ]
    }
];

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CATEGORY :
            return [{
                id: uniqueId(),
                name: action.name,
                tasks: []
            }, ...state];
        default:
            return state;
    }
};

