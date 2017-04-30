import React, {Component} from 'react';
import {Checkbox, RaisedButton, TextField} from "material-ui";

export class TaskEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task
        };
    }


    render () {
        return (<div>
            <div className="task-btn-block">
                <RaisedButton label="Save changes" />
                <RaisedButton label="Cancel"/>
            </div>
            <TextField id="-1" defaultValue={this.state.task.name} />
            <Checkbox label="Done" />
            <TextField id="-2" hintText="Description" multiLine={true} rows={5}/>
        </div>);
    }
}