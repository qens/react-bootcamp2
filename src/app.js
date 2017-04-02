import React, {Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import Header from "./header/header";
import SideNav from "./sidenav/side-nav";

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
            editedTask: null
        };

        this.onChooseCategory = this.onChooseCategory.bind(this);
    }

    onChooseCategory(category) {
        console.debug('Category has been chosen: ', category);
        this.setState({chosenCategory: category});
    }

    render() {
        return (
            <div>
                <Header/>
                <SideNav categories={this.state.categories} onChooseCategory={this.onChooseCategory}></SideNav>
            </div>
        );
    }

}