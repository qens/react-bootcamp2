import * as types from '../constants/action-types';

const appHistory = {
    past: [],
    present: {}, //reducer(undefined, {}),
    future: []
};

const setAppHistory = (past, present, future) => {
    appHistory.past = past;
    appHistory.present = present;
    appHistory.future = future;
};

export function undoable(reducer) {

    // Return a reducer that handles undo and redo
    return function (state, action) {
        const {past, present, future} = appHistory;

        switch (action.type) {
            case types.UNDO:
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                setAppHistory(newPast, previous, [present, ...future]);
                return {
                    ...appHistory.present,
                    appHistory: {canUndo: !!appHistory.past.length, canRedo: !!appHistory.future.length}
                };

            case types.REDO:
                const next = future[0];
                const newFuture = future.slice(1);
                setAppHistory([...past, present], next, newFuture);
                return {
                    ...appHistory.present,
                    appHistory: {canUndo: !!appHistory.past.length, canRedo: !!appHistory.future.length}
                };
            default:
                // Delegate handling the action to the passed reducer
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state
                }
                setAppHistory([...past, present], newPresent, []);
                return {
                    ...appHistory.present,
                    appHistory: {canUndo: !!appHistory.past.length, canRedo: !!appHistory.future.length}
                };
        }
    }
}