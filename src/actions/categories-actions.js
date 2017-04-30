import * as types from '../constants/action-types';

export const addCategory = (name, parentId) => {
    return {
        type: types.ADD_CATEGORY,
        name,
        parentId
    };
};