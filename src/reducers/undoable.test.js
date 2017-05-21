import {undoable} from "./undoable";
import * as types from "../constants/action-types";

describe('Undoable reducer', () => {
    let initialState;
    let mockReducer, undoableReducer;

    beforeEach(() => {
        initialState = {a: 1, b: 2};
        Object.freeze(initialState);
        mockReducer = jest.fn();
        mockReducer.mockReturnValueOnce(initialState)
            .mockReturnValueOnce({a: 2, b: 3});
        undoableReducer = undoable(mockReducer);
    });

    it('should return initial state', () => {
        expect(undoableReducer(undefined, {})).toEqual({
            a: 1,
            b: 2,
            appHistory: {canUndo: true, canRedo: false}
        });
    });

    it('should undo state', () => {
        let state = undoableReducer(undefined, {});
        state = undoableReducer(state, {});

        expect(state).toEqual({
            a: 2,
            b: 3,
            appHistory: {canUndo: true, canRedo: false}
        });
        state = undoableReducer(state, {
            type: types.UNDO
        });

        expect(state).toEqual({
            a: 1,
            b: 2,
            appHistory: {canUndo: true, canRedo: true}
        });
    });

    it('should redo state', () => {
        let state = undoableReducer(undefined, {});
        state = undoableReducer(state, {});

        expect(state).toEqual({
            a: 2,
            b: 3,
            appHistory: {canUndo: true, canRedo: false}
        });
        state = undoableReducer(state, {
            type: types.UNDO
        });

        expect(state).toEqual({
            a: 1,
            b: 2,
            appHistory: {canUndo: true, canRedo: true}
        });

        state = undoableReducer(state, {
            type: types.REDO
        });
        expect(state).toEqual({
            a: 2,
            b: 3,
            appHistory: {canUndo: true, canRedo: false}
        });
    })


});