import React, {Component} from 'react';
import {IconButton, Menu, MenuItem, Popover} from "material-ui";
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remove: {
                open: false,
                anchorEl: null
            }
        }
    }

    render() {
        return <span>
            <span>{this.props.category.name}</span>
            <IconButton><EditorModeEdit /></IconButton>
            <IconButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.debug('remove category');
                this.setState({remove: {open: true, anchorEl: e.currentTarget}});
            }}><ContentRemoveCircleOutline /></IconButton>
            <Popover
                open={this.state.remove.open}
                anchorEl={this.state.remove.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={() => this.setState({remove: {open: false}})}
            >
                <Menu>
                    <MenuItem primaryText="Remove" onClick={() => {
                        this.props.removeCategory(this.props.category);
                        this.setState({remove: {open: false}})
                    }}/>
                    <MenuItem primaryText="Cancel" onClick={() => this.setState({remove: {open: false}})}/>
                </Menu>
            </Popover>
            <IconButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.debug('add category');
                this.props.addToCategory(this.props.category.id);
            }}><ContentAddCircleOutline /></IconButton>
        </span>
    }
}