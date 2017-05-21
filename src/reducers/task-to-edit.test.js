import {taskToEdit} from "./task-to-edit"
import * as types from "../constants/action-types";

jest.mock('lodash/uniqueId', () => jest.fn(() => 'generatedId'));

describe('Task to edit reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {id: '0', categoryId: '-1', name: 'Test task to be edited', done: false, description: ''};
        Object.freeze(initialState);
    });

    it('should return the untouched initialState', () => {
        expect(taskToEdit(initialState, {})).toEqual(initialState);
    });

    it('should set task to edit', () => {
        const taskToBeEdited = {id: '1', categoryId: '1', name: 'Set task to be edit', done: false, description: ''};
        expect(taskToEdit(initialState, {
            type: types.SET_TASK_TO_EDIT,
            task: taskToBeEdited
        })).toEqual(taskToBeEdited)
    });

    it('should edit task to edit', () => {
        const id='0',
            categoryId= '1',
            name= 'Edited task to be edit',
            done= false,
            description= '';
        expect(taskToEdit(initialState, {
            type: types.EDIT_TASK_TO_EDIT,
            id, done, name, categoryId, description
        })).toEqual({id, categoryId, name, done, description});
    });

});