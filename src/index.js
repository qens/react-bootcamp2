import App from "./app";
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from "./pages/main/main";
import {TaskList} from "./pages/main/task-list/task-list";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRedirect to="/list" />
            <Route path="list" component={Main}>
                <Route path=":categoryId" component={TaskList} />
            </Route>
        </Route>
    </Router>
);


ReactDOM.render(routes, document.getElementById('root'));