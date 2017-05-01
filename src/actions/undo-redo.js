import * as types from '../constants/action-types';

export const undo = () => ({
    type: types.UNDO
});

export const redo = () => ({
    type: types.REDO
});