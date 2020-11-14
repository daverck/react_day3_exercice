import React, { Component } from 'react'
import Task from './Task'
import {connect} from 'react-redux'

export class TaskList extends Component {    

    render() {
        const {task_list} = this.props;

        return (
            <>
            <ul>
                {
                    (task_list).map((t) => {
                        return (
                            <Task   key={t.props.uuid} 
                                    uuid={t.props.uuid} 
                                    name={t.props.name} 
                                    priority={t.props.priority} 
                                    done={t.props.done} />
                        );
                    })
                }
            </ul>
            </>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        task_list: state.TodoReducer.task_list
    }
};
 
export default connect(mapStateToProps, null)(TaskList);
