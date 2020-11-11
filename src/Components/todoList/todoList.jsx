import React, { Component } from 'react'
import {v4 as uuid_v4} from 'uuid'
import TaskList from './TaskList'
import {PRIORITY} from './Task'
import Task from './Task';

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task_list: [],
            new_task_name: "",
            new_task_priority: ""
        }

        this.func_delete = this.func_delete.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        let t_props = {
            uuid: uuid_v4(),
            name: this.state.new_task_name,
            priority: this.state.new_task_priority,
            done: false,
            func_delete: this.func_delete
        };
    
        let new_task = new Task(t_props);

        // this.setState({ tasks: [...this.state.task_list, new_task] });
        this.setState((state) => ({task_list: [...state.task_list, new_task]}));
        // this.setState((state) => ({task_list: state.task_list.concat([new_task])}));
        // console.log(this.state.task_list.concat([new_task]));

        // this.state.task_list = this.state.task_list.concat([new_task]);

        // console.log("handle submit");
        // console.log(this.state.task_list);
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
        // console.log(this.state);
    }

    func_delete(e, uuid) {
        // let id_task_to_delete = taskList.find(t => t.uuid == uuid);
        this.setState((state, props) => ({task_list: state.taskList.filter(t => t.uuid != uuid)}));
    }

    render() {
        const {task_list, func_delete} = this.state;
        console.log("task_list");
        console.log(task_list);

        return (
            <div className="card bg-light p-2">
                <h1>To Do List</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="new_task_name">Nouvelle tâche</label>
                        <input  type="text" 
                                name="new_task_name" 
                                onChange={(e) => this.handleChange(e)} 
                                id="new_task_name" 
                                placeholder="Nom de la tâche" 
                                className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new_task_priority">Priorité</label>
                        <select name="new_task_priority" 
                                id="new_task_priority"
                                className="form-control"
                                onChange={(e) => this.handleChange(e)} >
                            <option value={PRIORITY.LOW}>{PRIORITY.LOW}</option>
                            <option value={PRIORITY.MEDIUM}>{PRIORITY.MEDIUM}</option>
                            <option value={PRIORITY.HIGHT}>{PRIORITY.HIGHT}</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-secondary ml-2">Ajouter</button>
                </form>

                <hr/>
                <h2>Liste de tâches</h2>
                <TaskList task_list={this.state.task_list} func_delete={this.func_delete} />
                {/* <ul>
                    {
                        task_list.map((t) =>
                           <>
                                 {t.name}
                                <Task   key={t.uuid} 
                                    uuid={t.uuid} 
                                    name={t.name} 
                                    priority={t.priority} 
                                    done={t.done} 
                                    func_delete={(e) => this.func_delete(e)} />
                           </>
                            
                        )
                    }
                </ul> */}

            </div>
        )
    }


}
