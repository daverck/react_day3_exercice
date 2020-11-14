import {Task} from '../../Components/todoRedux/Task'
import {TASK_ADDED, TASK_FINISHED, TASK_DELETED} from '../actions/actions-TodoRedux'

const initialState = {
    task_list: []
}

const TodoReducer = (state=initialState, action) =>
{
    switch(action.type)
    {
        case TASK_ADDED: 
            return taskAdd(action.taskToAdd, state);
        case TASK_DELETED:
            return taskDelete(action.taskToDelete, state);
        case TASK_FINISHED:
            return taskFinish(action.taskToFinish, state)
        default:
            return state;
    }
}

function taskAdd(task, state)
{
    state = {
        ...state,
        task_list: [...state.task_list, task]
        // task_list: state.task_list.concat([task])
    };
    return state;
}

function  taskFinish(task, state)
{   
    // task.props.done=!task.props.done;  
    let t_props = { uuid: task.props.uuid, 
                    name: task.props.name, 
                    priority: task.props.priority, 
                    done: !task.props.done}
    let modified_task = new Task(t_props);

    state=
            {
                ...state,
                task_list: state.task_list.map(
                            t => {
                                if (t.props.uuid !== task.props.uuid)
                                    return t;
                                else
                                    return modified_task;
                            }
                        )  
            };
    return state; 

}

 function  taskDelete(task, state)
{ 
    console.log(task);
    state=
        {
            ...state,
            task_list: state.task_list.filter(t => t.props.uuid !== task.props.uuid)
            //task_list: state.task_list.filter(t => t !== task)                     
        };
    return state;
}

export default TodoReducer; 
