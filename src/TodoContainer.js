import React, { Component } from 'react';
import './TodoContainer.css';
import Task from './TodoTask';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.checkTask = this.checkTask.bind(this);

        this.state = {
            nextTaskId: 6,
            allTasks: [
                { id: 1, task: "Walk the doggo", isChecked: false },
                { id: 2, task: "Spend 2 hours on Udemy", isChecked: false },
                { id: 3, task: "Go to training", isChecked: false },
                { id: 4, task: "This task is way to big so we want to make sure it will break correctly!", isChecked: false },
                { id: 5, task: "Read ES6 Book", isChecked: false }

            ]
        }
    }

    addTask() {
        let taskText = document.getElementById("taskText").value;
        document.getElementById("taskText").value = "";

        let previousState = { ...this.state };
        let nextTaskId = previousState.nextTaskId;

        previousState.allTasks.push({ id: nextTaskId, task: taskText });
        previousState.nextTaskId += 1;

        this.setState(previousState);
    }

    // Delete One task from List
    deleteTask(evt) {
        let taskId = evt.target.id;

        const currentTasks = this.state.allTasks.filter(task => task.id != taskId);

        this.setState({ allTasks: currentTasks });
    }

    checkTask(evt) {
        let taskId = evt.target.id;
        let previousState = { ...this.state };

        for (let i in previousState.allTasks) {
            if (previousState.allTasks[i].id == taskId) {
                previousState.allTasks[i].isChecked = true;
                break;
            }
        }

        this.setState(previousState);
    }

    render() {
        return (
            <div className='Todo'>

                <p className='Todo-title'> Todo List </p>

                <p className="title-text"> New task: </p>
                <input id="taskText" type="text" placeholder='' />

                <button onClick={this.addTask} className="addBtn"> Add <i className="fa-regular fa-square-plus"></i> </button>

                <p className="taskAmmount"> {this.state.allTasks.length} tasks </p>

                <ul>
                    {this.state.allTasks.map((task) => (
                        <Task key={task.id} id={task.id} task={task.task} isChecked={task.isChecked} deleteFunction={this.deleteTask} checkFunction={this.checkTask} />
                    ))}
                </ul>

            </div>
        )
    }

}

export default Todo;