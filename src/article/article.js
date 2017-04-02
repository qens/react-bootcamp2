import React, {Component} from 'react';

export default class Article extends Component {

    constructor(props) {
        super();
    }

    render() {
        let drawTask = task => <li key={task.id}>{task.name}</li>;

        let drawTasksList = () => <div>
            {this.props.category.tasks.map(task => drawTask(task))}
        </div>;

        return (<article>
            {this.props.category && this.props.category.tasks ? drawTasksList() : null}
        </article>)
    }

}