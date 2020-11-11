import React, { Component } from 'react'
import Task from './Task'
import {v4 as uuid_v4} from 'uuid'

export default class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task_list: props.task_list || [],
            func_delete: props.func_delete
        }
        console.log("t");
        console.log(this.props);
        console.log(this.state);

    }

    render() {
        const {task_list} = this.props; // this.state
        console.log("t2");
        console.log(this.state);
        return (
            <>
            <p>test render called {uuid_v4()}</p>
            <ul>
                {
                    task_list.map((t) => {
                        console.log("test");
                        return (
                            <Task   key={t.uuid} 
                                    uuid={t.uuid} 
                                    name={t.name} 
                                    priority={t.priority} 
                                    done={t.done} 
                                    func_delete={this.func_delete} />
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
