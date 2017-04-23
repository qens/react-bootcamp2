import React, {Component} from 'react';
import {Checkbox, FlatButton, IconButton, Paper, TextField} from "material-ui";
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './task-list.css';
import {Link} from "react-router";

const paperStyle = {
    width: '100%',
    minHeight: '50px',
    marginTop: '3px'
};

export class TaskList extends Component {

    constructor(props) {
        super(props);
        console.debug(props);
    }

    componentWillReceiveProps(nextProps) {
        console.debug(nextProps);
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
                    <Link to={`/task/${task.id}/edit`}><IconButton><EditorModeEdit /></IconButton></Link>
                </Paper>
            )}
        </div>;
    }

    render() {

        return (<article className="task-list">
            {this.props.category && this.props.category.tasks ? this.drawCreateTaskBlock() : null}
            {this.props.category && this.props.category.tasks ? this.drawTasksList() : null}
        </article>)
    }

}