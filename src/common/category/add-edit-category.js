import React, {Component} from 'react';
import {FlatButton, IconButton, TextField} from "material-ui";
import DoneIcon from 'material-ui/svg-icons/action/done';
import ClearIcon from 'material-ui/svg-icons/content/clear';

export class AddEditCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let textField;
        return <span>
            <TextField hintText="Input category name" ref={(field) => textField = field}/>
            <IconButton label="Add" onClick={() => {
                this.props.addCategory(textField.input.value);
                textField.input.value = '';
            }}><DoneIcon /></IconButton>
            <IconButton label="Cancel" onClick={() => {
                this.props.cancel();
                textField.input.value = '';
            }}><ClearIcon /></IconButton>
        </span>
    }

}