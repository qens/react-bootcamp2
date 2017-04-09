import App from "./app";
import * as ReactDOM from "react-dom";
import * as React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



ReactDOM.render(React.createElement(App), document.getElementById('root'));