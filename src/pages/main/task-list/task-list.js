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
        console.log(nextProps);
    }

    drawCreateTaskBlock() {
        let textField;

        console.log("drawCreateTaskBlock")

        return <div>
            <TextField hintText="Input task" ref={(input) => textField = input}/>
            <FlatButton onClick={() => {
                this.props.addTask(textField.input.value);
                textField.input.value = ''
            }}>Add</FlatButton>
        </div>;
    }

    getCategory() {
        let arr = this.props.categories.filter( cat => cat.id === this.props.params.categoryId );
        return arr[0];
    }

    drawTasksList() {

        const category = this.getCategory();

        console.log("category: ", category); 

        return <div>
            {category && category.tasks && category.tasks.map(task =>
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

        const category = this.getCategory();
        

        return (<article className="task-list">
            { (this.getCategory() && this.getCategory().tasks) ? this.drawCreateTaskBlock() : null}
            { (this.getCategory() && this.getCategory().tasks) ? this.drawTasksList() : null}
        </article>)
    }

}