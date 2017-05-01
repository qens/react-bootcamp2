import React, {Component} from 'react';
import {TaskEditor} from "./task-editor/task-editor";
import {connect} from "react-redux";
import {editTask} from "../../actions/tasks-actions";
import {bindActionCreators} from "redux";
import {CategoryListToMove} from "./category-list-to-move/category-list-to-move";

const mapStateProps = (state, ownProps) => ({
    categories: state.categories,
    task: state.tasks.find(task => task.id === ownProps.params.taskId)
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({editTask}, dispatch)
);
class TaskEdit extends Component {
    constructor(props) {
        super(props);
        console.debug(props);

        this.state = {
            task: Object.assign({}, this.props.task)
        };

        this.move = this.move.bind(this);
    }

    move(categoryId) {
        console.debug('Move to category: ', categoryId);
        this.setState(state => state.task.categoryId = categoryId);
    }

    render() {

        return (
            <div className="main">
                <div className="header"><h1>{this.state.task.name}</h1></div>
                <div className="content">
                    <div className="side-nav">
                        <CategoryListToMove categories={this.props.categories}
                                      move={this.move} categoryId={this.state.task.categoryId}/>
                    </div>
                    <article className="article">
                        <TaskEditor task={this.state.task}/>
                    </article>
                </div>
            </div>
        );

    }
}
export default connect(mapStateProps, mapDispatchToProps)(TaskEdit);