import React, {Component} from 'react';
import {Checkbox, RaisedButton, TextField} from "material-ui";

export class TaskEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            done: props.done,
            description: props.description
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: props.name,
            done: props.done,
            description: props.description
        });
    }


    render() {
        return (<div>
            <div className="task-btn-block">
                <RaisedButton label="Save changes"
                              onClick={() => {
                                  this.props.saveTask(this.state.name, this.state.done, this.state.description)
                              }}/>
                <RaisedButton label="Cancel" onClick={()=> {this.props.cancel()}}/>
            </div>
            <TextField id="-1" value={this.state.name}
                       onChange={(ev, value) => this.setState(state => state.name = value)}/>
            <Checkbox label="Done" defaultChecked={this.state.done}
                      onCheck={(ev, done) => this.setState(state => state.done = done)}/>
            <TextField id="-2" hintText="Description" multiLine={true} rows={5}
                       value={this.state.description}
                       onChange={(ev, value) => this.setState(state => state.description = value)}/>
        </div>);
    }
}