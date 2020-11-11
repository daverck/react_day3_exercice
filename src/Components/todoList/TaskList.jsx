import React, { Component } from 'react'
import Task from './Task'
import {v4 as uuid_v4} from 'uuid'

export default class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // task_list: props.task_list || [],
            //func_delete: props.func_delete
        }
        console.log("t");
        console.log(this.props);
        console.log(this.state);

    }

    render() {
        const {task_list, func_delete} = this.props; //this.state;
        console.log("t2");
        console.log(this.props);
        console.log(this.state);
        console.log(task_list);
        return (
            <>
            <p>test render called {uuid_v4()}</p>
            <ul>
                {
                    task_list.map((t) => {
                        console.log("test");
                        return (
                            <Task   key={t.props.uuid} 
                                    uuid={t.props.uuid} 
                                    name={t.props.name} 
                                    priority={t.props.priority} 
                                    done={t.props.done} 
                                    func_delete={func_delete} />
                        )
                    })
                }
            </ul>
            </>
        );
    }

    // componentDidUpdate(prev_props, prev_state){
    //     console.log("component did update");
    //     console.log({prev_props});
    //     console.log({prev_state});
    // }
}
