import React, {Component} from 'react';
import {Checkbox, FlatButton, IconButton, Paper, TextField} from "material-ui";
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './task-list.css';
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTask, changeTask} from "../../../actions/tasks-actions";

const paperStyle = {
    width: '100%',
    minHeight: '50px',
    marginTop: '3px'
};

const mapStateProps = (state, ownProps) => ({
    tasks: state.tasks.filter(task=>task.categoryId.toString() === ownProps.params.categoryId),
    categoryId: ownProps.params.categoryId
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({addTask, changeTask}, dispatch)
);
class TaskList extends Component {

    constructor(props) {
        super(props);
        console.debug(props);
    }

    drawCreateTaskBlock() {
        let textField;

        return <div>
            <TextField hintText="Input task" ref={(input) => textField = input}/>
            <FlatButton onClick={() => {
                this.props.addTask(textField.input.value, this.props.categoryId);
                textField.input.value = ''
            }}>Add</FlatButton>
        </div>;
    }

    drawTasksList() {
        return <div>
            {this.props.tasks.map(task =>
                <Paper key={task.id} style={paperStyle} className="task-block">
                    <div className="task-left-part">
                        <Checkbox defaultChecked={task.done}
                                  style={{width: '20px'}}
                                  onCheck={(event, isInputChecked) => this.props.changeTask(task.id, isInputChecked, task.name, task.categoryId, task.description)}/>
                        <span>{task.name}</span>
                    </div>
                    <Link to={`/task/${task.id}/edit`}><IconButton><EditorModeEdit /></IconButton></Link>
                </Paper>
            )}
        </div>;
    }

    render() {
        return (<article className="task-list">
            {this.drawCreateTaskBlock()}
            {this.drawTasksList()}
        </article>)
    }

}

export default connect(mapStateProps, mapDispatchToProps)(TaskList);