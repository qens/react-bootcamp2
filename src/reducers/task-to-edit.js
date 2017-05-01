import * as types from '../constants/action-types';

export const taskToEdit = (state = {}, action) => {
    switch (action.type) {
        case types.SET_TASK_TO_EDIT:
            return Object.assign({}, action.task);
        case types.EDIT_TASK_TO_EDIT:
            return Object.assign({}, state, {
                categoryId: action.categoryId,
                name: action.name,
                done: action.done,
                description: action.description
            });
        default:
            return state;
    }
};