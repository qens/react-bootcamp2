import * as types from "../constants/action-types";
import * as actions from "./tasks-actions";

describe('tasks actions', () => {
    it('should create an action to add task', () => {
        const name = 'Test task', categoryId = -1;
        const expectedAction = {
            type: types.ADD_TASK,
            name,
            categoryId
        };

        expect(actions.addTask(name, categoryId)).toEqual(expectedAction);
    });

    it('should create an action to done task', () => {
        const id = -1, done = true;
        const expectedAction = {
            type: types.DONE_TASK,
            id,
            done
        };

        expect(actions.doneTask(id, done)).toEqual(expectedAction);
    });

    it('should create an action to edit task', () => {
        const id = -1, task = {
            categoryId: '-1',
            name: 'Edited test task',
            done: false,
            description: ''
        };

        const expectedAction = {
            type: types.EDIT_TASK,
            id,
            task
        };

        expect(actions.editTask(id, task)).toEqual(expectedAction);
    });

    it('should create an action to set task to be edited', () => {
        const task = {
            id: '-1',
            categoryId: '-1',
            name: 'Test task to be edited',
            done: false,
            description: ''
        };

        const expectedAction = {
            type: types.SET_TASK_TO_EDIT,
            task
        };

        expect(actions.setTaskToEdit(task)).toEqual(expectedAction);
    });

    it('should create an action to edit task to edit', () => {
        const id = '-1',
            categoryId = '-1',
            name = 'Test task to be edited',
            done = false,
            description = '';

        const expectedAction = {
            type: types.EDIT_TASK_TO_EDIT,
            id, done, name, categoryId, description
        };

        expect(actions.editTaskToEdit(id, done, name, categoryId, description)).toEqual(expectedAction);
    });
});