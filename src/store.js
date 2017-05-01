import {combineReducers, createStore} from "redux";
import {reducers} from "./reducers/index";
import {routerReducer} from "react-router-redux";

export const store = createStore(combineReducers({...reducers, routing: routerReducer}));