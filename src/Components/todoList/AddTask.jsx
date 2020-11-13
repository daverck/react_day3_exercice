import React, { Component } from 'react';
import {PRIORITY} from './Task'
import {v4 as uuid_v4} from 'uuid'

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {  new_task_name: "",
                    new_task_priority: "" };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();

    if(!this.state.new_task_name) {alert("Le nom est obligatoire!!"); return;}

    let t_props = {
        uuid: uuid_v4(),
        name: this.state.new_task_name,
        priority: this.state.new_task_priority,
        done: false
    };

    this.props.func_add_task(e, t_props);

    this.setState({ new_task_name: "",
                    new_task_priority: "" });
  }


  render() {
    const { new_task_name, new_task_priority } = this.state;

    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="new_task_name">Nouvelle tâche</label>
                <input  type="text" 
                        name="new_task_name" 
                        onChange={(e) => this.handleChange(e)} 
                        id="new_task_name" 
                        placeholder="Nom de la tâche" 
                        className="form-control"
                        value={new_task_name} />
            </div>
            <div className="form-group">
                <label htmlFor="new_task_priority">Priorité</label>
                <select name="new_task_priority" 
                        id="new_task_priority"
                        className="form-control"
                        onChange={(e) => this.handleChange(e)}
                        value={new_task_priority} >
                    <option value={PRIORITY.LOW}>{PRIORITY.LOW}</option>
                    <option value={PRIORITY.MEDIUM}>{PRIORITY.MEDIUM}</option>
                    <option value={PRIORITY.HIGH}>{PRIORITY.HIGH}</option>
                </select>
            </div>
            <button type="submit" className="btn btn-secondary ml-2">Ajouter</button>
        </form>
    );
  }
}
