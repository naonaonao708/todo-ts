import React from "react";
import { Task } from "./Types";

type Props = {
    task: Task
    handleDone: (task: Task) => void
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) =>  {

    return (
        <li className={task.done ? 'done' : ''}>
            <label>
                <input 
                    type="checkbox" />
            </label>
    )
}