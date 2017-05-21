import {tasks} from "./tasks"
import * as types from "../constants/action-types";

jest.mock('lodash/uniqueId', () => jest.fn(() => 'generatedId'));

describe('Tasks reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = [{id: '0', categoryId: '-1', name: 'Test task', done: false, description: ''}];
        Object.freeze(initialState);
    });

    it('should return the untouched initialState', () => {
        expect(tasks(initialState, {})).toEqual(initialState);
    });

    it('should add task', () => {
        const categoryId = '-1', name = 'Added task';
        expect(tasks(initialState, {
            type: types.ADD_TASK,
            name, categoryId
        })).toEqual([
            {id: 'generatedId', categoryId, name, done: false, description: ''},
            {id: '0', categoryId: '-1', name: 'Test task', done: false, description: ''}
        ])
    });

    it('should done task', () => {
        const id = '0', done = true;
        expect(tasks(initialState, {
            type: types.DONE_TASK, id, done
        })).toEqual([{id, categoryId: '-1', name: 'Test task', done, description: ''}]);
    });

    it('should edit task', () => {
        const id = '0',
            editedTask = {id, categoryId: '-2', name: 'Edited test task', done: true, description: 'Well done'};
        expect(tasks(initialState, {
            type: types.EDIT_TASK, id, task: editedTask
        })).toEqual([editedTask]);
    })
});