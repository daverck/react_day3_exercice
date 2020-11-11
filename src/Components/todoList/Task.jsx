import React, { Component } from 'react'
import style from './task.module.css'
import {v4 as uuid_v4} from 'uuid'

export const PRIORITY = {  LOW: 'low',
                            MEDIUM: 'medium',
                            HIGHT: 'hight'
                        }

export default class Task extends Component {
    constructor(props) {
        super(props);

        // console.log("props");
        // console.log(props);
        try {
            this.state = {
                // uuid: props.uuid || uuid_v4(),
                // name: props.name,
                // priority: props.priority, //PRIORITY.indexof(...)
                // done: props.done,
                // func_delete: props.func_delete
           }
        } catch (error) {
            console.log("error");
            console.log(error);
        } finally {
            
        }


        // console.log("state");
        // console.log(this.state);

        // this.render = this.render.bind(this);
    }
    
    render() {
        const {uuid, name, priority, done, func_delete} = this.props; //this.state;
        console.log("task render");
        console.log(this.props);
        console.log(this.state);
        console.log("name ? "+name);

        return (
            <li key={uuid} id={uuid}>
                <p className={done ? style.task_done : ""}>{name}</p>
                <span>{priority}</span>
                <button type="button" className="btn btn-primary mr-1">Done</button>
                <button type="button" className="btn btn-danger mr-1" onClick={(e) => func_delete(e, uuid)}>Delete</button>
            </li>
        );
    }
}
