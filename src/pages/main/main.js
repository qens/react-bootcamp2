import React, {Component} from 'react';
import AppService from '../../app.service';
import uniqueId from 'lodash/uniqueId';

import Header from "./header/header";
import CategoryList from "./category-list/category-list";

export class Main extends Component {
    constructor(props) {
        super(props);
        console.debug(props);

        this.state = {
            // categories: AppService.getCategories(),
            // chosenCategory: AppService.getCategoryById(props.router.params.categoryId),
            filter: {
                showDone: !!props.router.location.query.showDone,
                searchText: props.router.location.query.searchText
            },
            progress: 0,
            taskToEdit: null,
            editMode: false
        };

        // this.onChooseCategory = this.onChooseCategory.bind(this);
        // this.addTask = this.addTask.bind(this);
        // this.editTask = this.editTask.bind(this);
        // this.onTaskChange = this.onTaskChange.bind(this);
        // this.addCategory = this.addCategory.bind(this);
        // this.removeCategory = this.removeCategory.bind(this);
        // this.editCategory = this.editCategory.bind(this);
        // this.changeFilter = this.changeFilter.bind(this);
    }

    //
    //
    //
    // addTask(taskName) {
    //     let newTask = {
    //         id: uniqueId(),
    //         name: taskName,
    //         done: false,
    //         description: ''
    //     };
    //
    //     let categoriez = this.state.categories;
    //
    //     let categories = this.state.categories.map( cat => {
    //         if (cat.id === this.props.params.categoryId) {
    //             cat.tasks && cat.tasks.push(newTask)
    //         }
    //         return cat;
    //     });
    //
    //     this.setState(state => { return {categories: categories} }, this.recalculateProgress);
    // }
    //
    //
    // changeFilter(showDone, searchText) {
    //     this.setState(state => {
    //         state.filter = {
    //             showDone: showDone,
    //             searchText: searchText
    //         }
    //     }, () => {
    //         const location = Object.assign({}, this.props.router.getCurrentLocation());
    //         Object.assign(location.query, this.state.filter);
    //         this.props.router.push(location);
    //     });
    // }
    //
    // recalculateProgress() {
    //     if (this.state.chosenCategory) {
    //         let total = this.state.chosenCategory.tasks.length;
    //         let count = this.state.chosenCategory.tasks.map(task => task.done).reduce((counter, isDone) => {
    //             console.debug(arguments);
    //             return counter + isDone;
    //         });
    //         let progress = count * 100 / total;
    //
    //         this.setState({progress: progress});
    //     }
    // }

    render() {
        return (
            <div className="main">
                {/*<Header filter={this.state.filter}*/}
                        {/*progress={this.state.progress}*/}
                        {/*changeFilter={this.changeFilter}/>*/}
                <div className="content">
                    <div className="side-nav">
                        <CategoryList {...this.props.params} />
                    </div>
                    <article className="article">
                        {this.props.children}
                    </article>
                </div>
            </div>);
    }
}