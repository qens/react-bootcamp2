import React, {Component} from 'react';
import {Checkbox, IconButton, LinearProgress, TextField} from "material-ui";
import ClearIcon from 'material-ui/svg-icons/content/clear';
import './header.css';
import {connect} from "react-redux";
import {browserHistory} from "react-router";


const mapStateProps = (state, ownProps) => {
    let tasks = ownProps.categoryId ? state.tasks.filter(task => task.categoryId === ownProps.categoryId) : null;
    let progress;
    if (tasks && tasks.length) {
        let total = tasks.length;
        let count = tasks.map(task => task.done).reduce((counter, isDone) => counter + isDone);
        progress = count * 100 / total;
    }

    console.debug(browserHistory);

    return {
        progress: progress
    }
};
class Header extends Component {
    textField;

    constructor(props) {
        super(props);
        console.debug(props);
        let location = browserHistory.getCurrentLocation();

        this.state = {
            showDone: location.query && location.query.showDone,
            searchText: location.query && location.query.searchText
        };

        this.clear = this.clear.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.onShowDoneChange = this.onShowDoneChange.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        let location = browserHistory.getCurrentLocation();
        this.setState({
            showDone: location.query && location.query.showDone,
            searchText: location.query && location.query.searchText
        });
        this.textField.input.value = location.query.searchText || '';
    }

    clear(e) {
        this.setState({searchText: null, showDone: false}, this.changeFilter);
        this.textField.input.value = '';
    }

    onShowDoneChange(e, checked) {
        this.setState({showDone: checked}, this.changeFilter);
    }

    onSearchTextChange(e, searchText) {
        this.setState({searchText: searchText}, this.changeFilter);
    }

    changeFilter() {
        console.debug(this.state);
        const location = Object.assign({}, browserHistory.getCurrentLocation());
        Object.assign(location.query, this.state);
        browserHistory.push(location);
    }

    render() {
        return (<div className="header">
            <div className="header-main">
                <h1>To-Do List</h1>
                <div className="filter">
                    <Checkbox style={{width: '155px'}} label="Show done"
                              defaultChecked={this.state.showDone}
                              onCheck={this.onShowDoneChange}/>
                    <TextField hintText="Search"
                               defaultValue={this.state.searchText}
                               ref={field => this.textField = field}
                               onChange={this.onSearchTextChange}/>
                    <IconButton tooltip="Clear" onClick={this.clear}><ClearIcon /></IconButton>
                </div>
            </div>
            <div>
                <LinearProgress value={this.props.progress} mode="determinate"/>
            </div>
        </div>);
    }
}

export default connect(mapStateProps)(Header);