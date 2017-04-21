import React, {Component} from 'react';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import {IconButton} from "material-ui";
import './list.css';

export class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="list-container">
            {this.props.children}
        </div>)
    }
}

export class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    renderExpandButton() {
        return <IconButton className="expand-button"
                           onClick={(e) => {
                               e.preventDefault();
                               e.stopPropagation();
                               this.setState((state) => state.open = !state.open)
                           }}>{ this.state.open ? <NavigationExpandLess /> : <NavigationExpandMore />}</IconButton>;
    }

    render() {
        // console.debug(this.props);
        return (<div className="list-item">
            {this.props.nestedItems ? this.renderExpandButton() : null}
            {this.props.children}
            {this.state.open ? <List>{this.props.nestedItems}</List> : null }
        </div>)
    }
}