import React, {Component} from 'react';
import {Checkbox, FlatButton, IconButton, Paper, TextField} from "material-ui";
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './task-list.css';

const paperStyle = {
    width: '100%',
    minHeight: '50px',
    marginTop: '3px'
};

export class TaskList extends Component {

    constructor(props) {
        super(props);
    }

    drawCreateTaskBlock() {
        let textField;
        return <div>
            <TextField hintText="Input task" ref={(input) => textField = input}/>
            <FlatButton onClick={() => {
                this.props.addTask(textField.input.value);
                textField.input.value = ''
            }}>Add</FlatButton>
        </div>;
    }

    drawTasksList() {
        return <div>
            {this.props.category.tasks.map(task =>
                <Paper key={task.id} style={paperStyle} className="task-block">
                    <div className="task-left-part">
                        <Checkbox checked={task.done}
                                  style={{width: '20px'}}
                                  onCheck={(event, isInputChecked) => this.props.onTaskChange(task, isInputChecked)}/>
                        <span>{task.name}</span>
                    </div>
                    <IconButton onClick={() => this.props.editTask(task)} ><EditorModeEdit /></IconButton>
                </Paper>
            )}
        </div>;
    }

    render() {

        return (<article className="article">
            {this.props.category && this.props.category.tasks ? this.drawCreateTaskBlock() : null}
            {this.props.category && this.props.category.tasks ? this.drawTasksList() : null}
        </article>)
    }

}