import React, {Component} from 'react';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.props.children}
        </div>);
    }

}