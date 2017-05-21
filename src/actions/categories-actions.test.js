import * as types from "../constants/action-types";
import * as actions from "./categories-actions";

describe('categories actions', () => {
    it('should create an action to add category', () => {
        const name = 'Test category', parentId = -1;
        const expectedAction = {
            type: types.ADD_CATEGORY,
            name,
            parentId
        };

        expect(actions.addCategory(name, parentId)).toEqual(expectedAction);
    });
});