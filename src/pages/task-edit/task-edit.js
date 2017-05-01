import React, {Component} from 'react';
import TaskEditor from "./task-editor/task-editor";
import {connect} from "react-redux";
import {editTask, editTaskToEdit, setTaskToEdit} from "../../actions/tasks-actions";
import {bindActionCreators} from "redux";
import {CategoryListToMove} from "./category-list-to-move/category-list-to-move";
import {store} from '../../store';

const mapStateProps = (state, ownProps) => {
    let taskToEdit = state.taskToEdit;
    if (taskToEdit.id !== ownProps.params.taskId) {
        store.dispatch(setTaskToEdit(state.tasks.find(task => task.id === ownProps.params.taskId)));
    }

    return {
        categories: state.categories,
        task: taskToEdit
    };
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({setTaskToEdit, editTaskToEdit, editTask}, dispatch)
);
class TaskEdit extends Component {
    constructor(props) {
        super(props);

        this.move = this.move.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    move(categoryId) {
        this.props.editTaskToEdit(this.props.task.id, this.props.task.done,
            this.props.task.name, categoryId, this.props.task.description);
    }

    saveTask() {
        this.props.editTask(this.props.task.id, this.props.task);
    }

    cancel() {
        this.props.setTaskToEdit(null);
    }

    render() {
        return this.props.task ?
            ( <div className="main">
                <div className="header"><h1>{this.props.task.name}</h1></div>
                <div className="content">
                    <div className="side-nav">
                        <CategoryListToMove categories={this.props.categories}
                                            move={this.move} categoryId={this.props.task.categoryId}/>
                    </div>
                    <article className="article">
                        <TaskEditor saveTask={this.saveTask} cancel={this.cancel}/>
                    </article>
                </div>
            </div>) : null;
    }
}
export default connect(mapStateProps, mapDispatchToProps)(TaskEdit);