import * as types from "../constants/action-types";
import * as actions from "./undo-redo";

describe('undo redo actions', () => {
    it('should create an action to undo changes', () => {
        const expectedAction = {
            type: types.UNDO
        };

        expect(actions.undo()).toEqual(expectedAction);
    });

    it('should create an action to redo changes', () => {
        const expectedAction = {
            type: types.REDO
        };

        expect(actions.redo()).toEqual(expectedAction);
    });
});