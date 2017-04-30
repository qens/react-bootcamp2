import React, {Component} from 'react';
import {Checkbox, IconButton, LinearProgress, TextField} from "material-ui";
import ClearIcon from 'material-ui/svg-icons/content/clear';
import './header.css';
import {connect} from "react-redux";


const mapStateProps = (state, ownProps) => {
    let tasks = ownProps.categoryId ? state.tasks.filter(task => task.categoryId.toString() === ownProps.categoryId) : null;
    let progress;
    if (tasks && tasks.length) {
        let total = tasks.length;
        let count = tasks.map(task => task.done).reduce((counter, isDone) => counter + isDone);
        progress = count * 100 / total;
    }

    return {
        progress: progress
    }
};
class Header extends Component {
    textField;

    constructor(props) {
        super(props);
        console.debug(props);

        this.state = {
            showDone: props.filter && props.filter.showDone,
            searchText: props.filter && props.filter.searchText
        };

        this.clear = this.clear.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    clear(e) {
        this.setState({searchText: null});
        this.textField.input.value = '';
    }

    onCheck(e, checked) {
        this.setState({showDone: checked}, this.changeFilter);
    }

    onSearch(e, searchText) {
        this.setState({searchText: searchText}, this.changeFilter);
    }

    changeFilter() {
        console.debug(this.state);
        this.props.changeFilter(this.state.showDone, this.state.searchText);
    }

    render() {
        return (<div className="header">
            <div className="header-main">
                <h1>To-Do List</h1>
                <div className="filter">
                    <Checkbox style={{width: '155px'}} label="Show done"
                              defaultChecked={this.state.showDone}
                              onCheck={this.onCheck}/>
                    <TextField hintText="Search"
                               defaultValue={this.state.searchText}
                               ref={field => this.textField = field}
                               onChange={this.onSearch}/>
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