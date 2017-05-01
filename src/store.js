import {combineReducers, createStore} from "redux";
import {reducers} from "./reducers/index";
import {routerReducer} from "react-router-redux";
import {undoable} from "./reducers/undoable";

let combinedReducers = undoable(combineReducers({...reducers, routing: routerReducer}));

export const store = createStore(combinedReducers);