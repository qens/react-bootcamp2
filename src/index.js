import App from "./app";
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from "./pages/main/main";
import TaskList from "./pages/main/task-list/task-list";
import TaskEdit from "./pages/task-edit/task-edit";
import {combineReducers, createStore} from "redux";
import {reducers} from "./reducers/index";
import {Provider} from "react-redux";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(combineReducers({...reducers, routing: routerReducer}));

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="/list"/>
                <Route path="list" component={Main}>
                    <Route path=":categoryId" component={TaskList}/>
                </Route>
                <Route path="task/:taskId/edit" component={TaskEdit}/>
            </Route>
        </Router>
    </Provider>
);


ReactDOM.render(routes, document.getElementById('root'));