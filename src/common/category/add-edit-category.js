import React, {Component} from 'react';
import {FlatButton, TextField} from "material-ui";

export class AddEditCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let textField;
        return <span>
            <TextField hintText="Input category name" ref={(field) => textField = field}/>
            <FlatButton label="Add" onClick={() => {
                this.props.addCategory(textField.input.value);
                textField.input.value = '';
            }}/>
            <FlatButton label="Cancel" onClick={() => {
                this.props.cancel();
                textField.input.value = '';
            }}/>
        </span>
    }

}