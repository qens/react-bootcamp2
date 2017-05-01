import React, {Component} from 'react';
import './app.css';
import {FlatButton, MuiThemeProvider} from "material-ui";
import {bindActionCreators} from "redux";
import {redo, undo} from "./actions/undo-redo";
import {connect} from "react-redux";

const mapStateProps = (state, ownProps) => ( {
    appHistory: state.appHistory
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({undo, redo}, dispatch)
);
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<MuiThemeProvider>
            <div>
                {this.props.children}
                <FlatButton label="Undo" disabled={this.props.appHistory.canUndo} onClick={this.props.undo}/>
                <FlatButton label="Redo" disabled={this.props.appHistory.canRedo} onClick={this.props.redo}/>
            </div>
        </MuiThemeProvider>);
    }

}
export default connect(mapStateProps, mapDispatchToProps)(App);