import * as types from '../constants/action-types';

export const addTask = (name, categoryId) => ({
    type: types.ADD_TASK,
    name,
    categoryId
});

export const changeTask = (id, done, name, categoryId, description) => ({
    type: types.CHANGE_TASK,
    id, done, name, categoryId, description
});