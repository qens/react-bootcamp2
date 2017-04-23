import React, {Component} from 'react';
import './app.css';
import {MuiThemeProvider} from "material-ui";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<MuiThemeProvider>
            {this.props.children}
        </MuiThemeProvider>);
    }

}