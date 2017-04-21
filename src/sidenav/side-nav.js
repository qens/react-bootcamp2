import React, {Component} from 'react';
import {List, ListItem} from '../common/list/list';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import {FlatButton, IconButton, TextField} from "material-ui";

export default class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryIsAddingTo: null
        }
    }

    drawAddCategory(categories) {
        let textField;
        return <span>
            <TextField hintText="Input category name" ref={(field) => textField = field}/>
            <FlatButton label="Add" onClick={() => {
                console.debug(textField);
                this.props.addCategory(textField.input.value, this.props.categories);
                textField.input.value = '';
            }}/>
        </span>
    }

    drawNestedAddCategory(item) {
        let textField;
        return <span key="-1">
            <TextField hintText="Input category name" ref={(field) => textField = field}/>
            <FlatButton label="Add" onClick={() => {
                console.debug(textField);
                this.props.addCategory(textField.input.value, item.categories, item);
                textField.input.value = '';
                this.setState({categoryIsAddingTo: null});
            }}/>
            <FlatButton label="Cancel" onClick={() => {
                console.debug(textField);
                // this.props.addCategory(textField.input.value, categories);
                textField.input.value = '';
                this.setState({categoryIsAddingTo: null});
            }}/>
        </span>
    }

    drawCategories(categories) {
        return categories.map(item => {
                let nestedItems = [];
                (item.id === this.state.categoryIsAddingTo)
                && nestedItems.push(this.drawNestedAddCategory(item));
                item.categories && Array.prototype.push.apply(nestedItems, this.drawCategories(item.categories));
                console.debug(nestedItems);

                return <ListItem key={item.id}
                                 onClick={(event) => {
                                     event.preventDefault();
                                     event.stopPropagation();
                                     this.props.onChooseCategory(item)
                                 }}
                                 open={item.id === this.state.categoryIsAddingTo}
                                 nestedItems={nestedItems && nestedItems.length ? nestedItems : null}
                ><span>{item.name}</span>
                    <IconButton><EditorModeEdit /></IconButton>
                    <IconButton><ContentRemoveCircleOutline /></IconButton>
                    <IconButton><ContentAddCircleOutline onClick={(e) => {
                        // e.preventDefault();
                        // e.stopPropagation();
                        console.debug('add category');
                        this.setState({categoryIsAddingTo: item.id});
                    }}/></IconButton>
                </ListItem>
            }
        );
    }

    render() {
        return (<div className="side-nav">
            {this.drawAddCategory(this.props.categories)}
            <List>
                {this.props.categories ? this.drawCategories(this.props.categories) : null}
            </List>
        </div>);
    }
}