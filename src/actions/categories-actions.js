import * as types from '../constants/action-types';

export const addCategory = (name, parentId) => ({
    type: types.ADD_CATEGORY,
    name,
    parentId
});

export const removeCategory = id => ({
    type: types.REMOVE_CATEGORY,
    id
});

export const editCategory = (id, name) => ({
    type: types.EDIT_CATEGORY,
    id,
    name
});