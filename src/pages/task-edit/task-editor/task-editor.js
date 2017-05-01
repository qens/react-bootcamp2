import React, {Component} from 'react';
import {Checkbox, RaisedButton, TextField} from "material-ui";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editTaskToEdit} from "../../../actions/tasks-actions";

const mapStateProps = (state, ownProps) => ( {
    task: state.taskToEdit
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({editTaskToEdit}, dispatch)
);
class TaskEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className="task-btn-block">
                <RaisedButton label="Save changes" onClick={this.props.saveTask}/>
                <RaisedButton label="Cancel" onClick={this.props.cancel}/>
            </div>
            <TextField id="1" value={this.props.task.name}
                       onChange={(ev, name) => this.props.editTaskToEdit(this.props.task.id,
                           this.props.task.done, name, this.props.task.categoryId, this.props.task.description)}/>
            <Checkbox label="Done" defaultChecked={this.props.task.done}
                      onCheck={(ev, done) => this.props.editTaskToEdit(this.props.task.id,
                          done, this.props.task.name, this.props.task.categoryId, this.props.task.description)}/>
            <TextField id="2" hintText="Description" multiLine={true} rows={5}
                       value={this.props.task.description}
                       onChange={(ev, description) => this.props.editTaskToEdit(this.props.task.id,
                           this.props.task.done, this.props.task.name, this.props.task.categoryId, description)}/>
        </div>);
    }
}

export default connect(mapStateProps, mapDispatchToProps)(TaskEditor);