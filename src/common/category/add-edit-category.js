import React, {Component} from 'react';
import {IconButton, TextField} from "material-ui";
import DoneIcon from 'material-ui/svg-icons/action/done';
import ClearIcon from 'material-ui/svg-icons/content/clear';

export class AddEditCategory extends Component {

    textField;

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    add(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.addCategory(this.textField.input.value);
        this.textField.input.value = '';
    }

    cancel(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.cancel();
        this.textField.input.value = '';
    }

    render() {
        return <span>
            <TextField hintText="Input category name" defaultValue={this.props.value} ref={(field) => this.textField = field}/>
            <IconButton tooltip="Ok" onClick={this.add}><DoneIcon /></IconButton>
            <IconButton tooltip="Cancel" onClick={this.cancel}><ClearIcon /></IconButton>
        </span>
    }

}