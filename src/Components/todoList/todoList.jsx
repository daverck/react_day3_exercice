import React, { Component } from 'react'
import {v4 as uuid_v4} from 'uuid'
import TaskList from './TaskList'
import Task, {PRIORITY} from './Task'
import AddTask from './AddTask'

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task_list: []
        }

        this.func_delete = this.func_delete.bind(this);
        this.func_task_done = this.func_task_done.bind(this);
        this.func_add_task = this.func_add_task.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    func_delete(e, uuid) {
        this.setState((state, props) => ({task_list: state.task_list.filter(t => t.props.uuid !== uuid)}));
    }

    func_add_task(e, t_props){
        t_props.func_delete = this.func_delete;
        t_props.func_task_done = this.func_task_done;
        
        let new_task = new Task(t_props);

        this.setState((state) => ({task_list: [...state.task_list, new_task]}));
        // this.setState((state) => ({task_list: state.task_list.concat([new_task])}));
    }

    func_task_done(e, task){
        let t_props = { uuid: task.props.uuid, 
                        name: task.props.name, 
                        priority: task.props.priority, 
                        done: !task.props.done, 
                        func_delete: task.props.func_delete, 
                        func_task_done: task.props.func_task_done}
        let modified_task = new Task(t_props);

        this.setState((state, props) => ({task_list: this.state.task_list.map(
            t => {
                if (t.props.uuid !== task.props.uuid)
                    return t;
                else
                    return modified_task;
            }
        )}));

        console.log("called");
    }

    render() {
        const {task_list} = this.state;

        return (
            <div className="card bg-light p-2 m-2">
                <h1>To Do List</h1>
                <AddTask func_add_task={this.func_add_task} />

                <hr/>
                <h2>Liste de tâches</h2>
                <TaskList task_list={task_list} func_delete={this.func_delete} func_task_done={this.func_task_done}  />
            </div>
        )
    }


}
