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


export const editTask = (id, task) => ({
    type: types.EDIT_TASK,
    id, task
});

export const setTaskToEdit = (task) => ({
    type: types.SET_TASK_TO_EDIT,
    task
});

export const editTaskToEdit = (id, done, name, categoryId, description) => ({
    type: types.EDIT_TASK_TO_EDIT,
    id, done, name, categoryId, description
});
