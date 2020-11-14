import React, { Component } from 'react'
import style from './task.module.css'
import {connect} from 'react-redux'
import {taskFinish, taskDelete} from "../../store/actions/actions-TodoRedux"

export const PRIORITY = {   LOW: 'low',
                            MEDIUM: 'medium',
                            HIGH: 'high'
                        }

export class Task extends Component {

    renderPriority(){
        switch(this.props.priority || PRIORITY.LOW)
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
                    <button type="button" className="btn btn-primary mr-1" onClick={(e) => func_task_done(this)}>Done</button>
                    <button type="button" className="btn btn-danger mr-1" onClick={(e) => func_delete(this)}>Delete</button>
                </span>
            </li>
        );
    }
}


const mapDispatchToProps= 
{
    func_task_done: taskFinish,
    func_delete: taskDelete
};

export default connect(null, mapDispatchToProps)(Task);
