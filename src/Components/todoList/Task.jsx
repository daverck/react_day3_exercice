import React, { Component } from 'react'
import style from './task.module.css'
import {v4 as uuid_v4} from 'uuid'

export const PRIORITY = {  LOW: 'low',
                            MEDIUM: 'medium',
                            HIGH: 'high'
                        }

export default class Task extends Component {
    constructor(props) {
        super(props);

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
        } 
    }

    renderPriority(){
        switch(this.props.priority || "low")
        {
            case PRIORITY.HIGH:
                return (<i className="fas fa-exclamation mr-3"></i>);
                break;
            case PRIORITY.MEDIUM:
                return (<i className="fas fa-star mr-3"></i>);
                break;
            case PRIORITY.LOW:
            default:
                return(<i className="far fa-check-circle mr-3"></i>);
                break;
        }
    }
    
    render() {
        const {uuid, name, priority, done, func_delete, func_task_done} = this.props;

        return (
            <li key={uuid} id={uuid} className="list-inline d-flex justify-content-between">
                <p className={"d-inline mr-1 " + (done ? style.task_done : "")} >{name}</p>
                <span>
                    { this.renderPriority() }
                    <button type="button" className="btn btn-primary mr-1" onClick={(e) => func_task_done(e, this)}>Done</button>
                    <button type="button" className="btn btn-danger mr-1" onClick={(e) => func_delete(e, uuid)}>Delete</button>
                </span>
            </li>
        );
    }
}
