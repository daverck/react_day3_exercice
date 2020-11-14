import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default class TodoList extends Component {

    render() {

        return (
            <div className="card bg-light p-2 m-2">
                <h1>To Do List</h1>
                <AddTask />

                <hr/>
                <h2>Liste de tâches</h2>
                <TaskList />
            </div>
        )
    }


}
