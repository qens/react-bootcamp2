import React, {Component} from 'react';
import {CategoryListMode} from "../main/category-list/category-list";
import CategoryList from "../main/category-list/category-list";
import {TaskEditor} from "./task-editor/task-editor";
import {connect} from "react-redux";
import {changeTask} from "../../actions/tasks-actions";
import {bindActionCreators} from "redux";

const mapStateProps = (state, ownProps) => ({
    categories: state.categories,
    task: state.tasks.find(task => task.id === ownProps.params.taskId)
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({changeTask}, dispatch)
);
class TaskEdit extends Component {
    constructor(props) {
        super(props);
        console.debug(props);

        this.move = this.move.bind(this);
    }

    move(categoryId) {
        console.debug('Move to category: ', categoryId);
    }

    render() {

        return (
            <div className="main">
                <div className="header"><h1>{this.props.task.name}</h1></div>
                <div className="content">
                    <div className="side-nav">
                        <CategoryList mode={CategoryListMode.toMove} categories={this.props.categories}
                                      move={this.move}/>
                    </div>
                    <article className="article">
                        <TaskEditor task={this.props.task}/>
                    </article>
                </div>
            </div>
        );

    }
}
export default connect(mapStateProps, mapDispatchToProps)(TaskEdit);