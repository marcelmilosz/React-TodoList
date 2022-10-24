import React, { Component } from 'react';
import "./TodoTask.css";

class Task extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='SingleTask'>

                <li>
                    <p className={this.props.isChecked ? "task-checked" : ""}> {this.props.task} </p>
                    {!this.props.isChecked ? <button id={this.props.id} onClick={this.props.checkFunction} className="taskBtn green"> <i id={this.props.id} onClick={this.props.checkFunction} className="fa-solid fa-check"></i> </button> : ""}

                    <button id={this.props.id} onClick={this.props.deleteFunction} className="taskBtn red"> <i id={this.props.id} onClick={this.props.deleteFunction} className="fa-solid fa-trash"></i> </button>

                </li>

            </div>
        )
    }
}

export default Task;