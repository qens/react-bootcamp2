import React, {Component} from 'react';
import {IconButton, Menu, MenuItem, Popover} from "material-ui";
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import {AddEditCategory} from "./add-edit-category";
import './category.css';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            remove: {
                open: false,
                anchorEl: null
            }
        }
    }

    render() {
        return this.state.edit ?
            <AddEditCategory
                value={this.props.category.name}
                addCategory={value => {
                    this.props.editCategory(value);
                    this.setState({edit: false});
                }}
                cancel={() => this.setState({edit: false})}/>
            :
            <div className="category-block">
                <div>
                    <span>{this.props.category.name}</span>
                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.debug('edit category');
                        this.setState({edit: true});
                    }}><EditorModeEdit /></IconButton>
                </div>
                <div>
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
                </div>
            </div>
    }
}