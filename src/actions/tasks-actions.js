import * as types from '../constants/action-types';

export const addTask = (name, categoryId) => ({
    type: types.ADD_TASK,
    name,
    categoryId
});

export const doneTask = (id, done) => ({
    type: types.DONE_TASK,
    id, done
});


export const editTask = (id, done, name, categoryId, description) => ({
    type: types.EDIT_TASK,
    id, done, name, categoryId, description
});