import React, {Component} from 'react';

export default class Article extends Component {

    constructor(props) {
        super();
    }

    render() {
        let drawCreateTaskBlock = () => <div>
            <input type="text" ref={(input) => this.input = input}/>
            <button onClick={() => this.props.addTask(this.input.value)}>Add task</button>
        </div>;

        let drawTask = task => <li key={task.id}>
            <input type="checkbox" checked={task.done} onChange={(event)=>this.props.onTaskChange(task, event.target.checked)}/>
            {task.name}
            <button onClick={()=>this.props.editTask(task)}>Edit</button>
        </li>;

        let drawTasksList = () => <div>
            {this.props.category.tasks.map(task => drawTask(task))}
        </div>;

        return (<article className="article">
            {this.props.category && this.props.category.tasks ? drawCreateTaskBlock() : null}
            {this.props.category && this.props.category.tasks ? drawTasksList() : null}
        </article>)
    }

}