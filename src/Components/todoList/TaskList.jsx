import React, { Component } from 'react'
import Task from './Task'
import {v4 as uuid_v4} from 'uuid'

export default class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const {task_list, func_delete, func_task_done} = this.props;

        return (
            <>
            <ul>
                {
                    task_list.map((t) => {
                        return (
                            <Task   key={t.props.uuid} 
                                    uuid={t.props.uuid} 
                                    name={t.props.name} 
                                    priority={t.props.priority} 
                                    done={t.props.done} 
                                    func_delete={func_delete}
                                    func_task_done={func_task_done} />
                        );
                    })
                }
            </ul>
            </>
        );
    }
}
