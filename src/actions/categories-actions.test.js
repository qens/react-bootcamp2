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

    it('should create an action to remove category', ()=>{
        const id = -1;
        const expectedAction = {
            type: types.REMOVE_CATEGORY,
            id
        };

        expect(actions.removeCategory(id)).toEqual(expectedAction);
    });

    it('should create an action to edit category', () => {
        const id = -1, name = 'Edited test category';
        const expectedAction = {
            type: types.EDIT_CATEGORY,
            id,
            name
        };

        expect(actions.editCategory(id, name)).toEqual(expectedAction);
    });
});