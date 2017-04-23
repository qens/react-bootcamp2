import React, {Component} from 'react';
import AppService from '../../app.service';
import uniqueId from 'lodash/uniqueId';

import Header from "./header/header";
import {CategoryList} from "./category-list/category-list";

export class Main extends Component {
    constructor(props) {
        super(props);
        console.debug(props);

        this.state = {
            categories: AppService.getCategories(),
            chosenCategory: AppService.getCategoryById(props.router.params.categoryId),
            filter: {
                showDone: !!props.router.location.query.showDone,
                searchText: props.router.location.query.searchText
            },
            progress: 0,
            taskToEdit: null,
            editMode: false
        };

        // props.router.listen((routerState)=>{
        //     console.debug(arguments);
        //     let categoryId = routerState.router.params.categoryId;
        //     this.setState({chosenCategory: AppService.getCategoryById(categoryId)});
        // });

        this.onChooseCategory = this.onChooseCategory.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.onTaskChange = this.onTaskChange.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    onChooseCategory(category) {
        console.debug('Category has been chosen: ', category);
        this.setState({chosenCategory: category},
            () => {
                // const location = Object.assign({}, this.props.router.getCurrentLocation());
                // // Object.assign(location.query, this.state.filter);
                // location.params.categoryId = category.id;
                // this.props.router.push(location);

                this.recalculateProgress()
            });
    }

    addCategory(name, categories, item) {
        console.debug('Add category: ', name, categories, item);
        this.setState(state => {
            categories = categories || (item && item.categories);
            if (!categories) {
                categories = item.categories = [];
            }
            let category = {
                id: uniqueId(),
                name: name,
                tasks: []
            };
            categories.unshift(category);
        });
    }

    removeCategory(category, categories) {
        console.debug('Remove category: ', category, categories);
        this.setState(state => {
            let index = categories.indexOf(category);
            categories.splice(index, 1);
        });
    }

    editCategory(name, item) {
        console.debug('Edit category: ', name, item);
        this.setState(state => {
            item.name = name;
        })
    }

    addTask(taskName) {
        let newTask = {
            id: uniqueId(),
            name: taskName,
            done: false,
            description: ''
        };
        this.setState(state => {
            state.chosenCategory.tasks.push(newTask)
        }, this.recalculateProgress);
    }

    editTask(task) {
        this.setState({taskToEdit: task});
    }

    onTaskChange(task, isDone) {
        console.debug(arguments);
        this.setState(() => task.done = isDone, this.recalculateProgress);

    }

    changeFilter(showDone, searchText) {
        this.setState(state => {
            state.filter = {
                showDone: showDone,
                searchText: searchText
            }
        }, () => {
            const location = Object.assign({}, this.props.router.getCurrentLocation());
            Object.assign(location.query, this.state.filter);
            this.props.router.push(location);
        });
    }

    recalculateProgress() {
        if (this.state.chosenCategory) {
            let total = this.state.chosenCategory.tasks.length;
            let count = this.state.chosenCategory.tasks.map(task => task.done).reduce((counter, isDone) => {
                console.debug(arguments);
                return counter + isDone;
            });
            let progress = count * 100 / total;

            this.setState({progress: progress});
        }
    }

    render() {
        return (
            <div className="main">
                <Header filter={this.state.filter}
                        progress={this.state.progress}
                        changeFilter={this.changeFilter}/>
                <div className="content">
                    <div className="side-nav">
                        <CategoryList categories={this.state.categories}
                                      onChooseCategory={this.onChooseCategory}
                                      addCategory={this.addCategory}
                                      removeCategory={this.removeCategory}
                                      editCategory={this.editCategory}
                                      chosenCategoryId={this.state.chosenCategory && this.state.chosenCategory.id}/>
                    </div>
                    <article className="article"> {this.props.children && React.cloneElement(this.props.children, {
                        category: this.state.chosenCategory,
                        addTask: this.addTask,
                        editTask: this.editTask,
                        onTaskChange: this.onTaskChange,
                        taskToEdit: this.state.taskToEdit
                    })}</article>
                </div>
            </div>);
    }
}