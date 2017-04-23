import React, {Component} from 'react';
import AppService from '../../app.service';
import {CategoryList, CategoryListMode} from "../main/category-list/category-list";
import {TaskEditor} from "./task-editor/task-editor";

export class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: AppService.getCategories(),
            task: AppService.getTaskById(props.router.params.taskId)
        };

        this.move = this.move.bind(this);
    }

    move(categoryId) {
        console.debug('Move to category: ', categoryId);
    }

    render() {

        return (
            <div className="main">
                <div className="header"><h1>{this.state.task.name}</h1></div>
                <div className="content">
                    <div className="side-nav">
                        <CategoryList mode={CategoryListMode.toMove} categories={this.state.categories}
                                      move={this.move}/>
                    </div>
                    <article className="article">
                        <TaskEditor task={this.state.task}/>
                    </article>
                </div>
            </div>
        );

    }
}