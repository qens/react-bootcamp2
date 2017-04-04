import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import Header from "./header/header";
import SideNav from "./sidenav/side-nav";
import Article from "./article/article";
import './app.css';

let categories = [
    {
        id: uniqueId(),
        name: 'Category 1',
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 1 1',
                done: false,
                description: ''
            },
            {
                id: uniqueId(),
                name: 'Task 1 2',
                done: false,
                description: ''
            }
        ]
    }, {
        id: uniqueId(),
        name: 'Category 2',
        categories: [{
            id: uniqueId(),
            name: 'Category 2 1',
            tasks: [
                {
                    id: uniqueId(),
                    name: 'Task 2 1 1',
                    done: false,
                    description: ''
                },
                {
                    id: uniqueId(),
                    name: 'Task 2 1 2',
                    done: false,
                    description: ''
                }
            ]
        }],
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 2 1',
                done: false,
                description: 'Task 2 1'
            },
            {
                id: uniqueId(),
                name: 'Task 2 2',
                done: true,
                description: 'Task 2 2'
            }
        ]
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: categories,
            chosenCategory: null,
            filter: null,
            taskToEdit: null,
            editMode: false
        };

        this.onChooseCategory = this.onChooseCategory.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.onTaskChange = this.onTaskChange.bind(this);
    }

    onChooseCategory(category) {
        console.debug('Category has been chosen: ', category);
        this.setState({chosenCategory: category});
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
        });
    }

    editTask(task) {
        this.setState({taskToEdit: task});
    }

    onTaskChange(task, isDone) {
        console.debug(arguments);
        this.setState(() => task.done = isDone);
    }

    render() {
        return (
            <div className="main">
                <Header className="header"/>
                <div className="content">
                    <SideNav categories={this.state.categories}
                             onChooseCategory={this.onChooseCategory}></SideNav>
                    <Article category={this.state.chosenCategory}
                             addTask={this.addTask}
                             editTask={this.editTask}
                             onTaskChange={this.onTaskChange}
                             taskToEdit={this.state.taskToEdit}/>
                </div>
            </div>
        );
    }

}