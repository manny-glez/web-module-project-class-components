import React from 'react';

const Todo = props => {
  const { title, completeTask, id, completed } = props;

    return (
      <div id='todoId' onClick={()=> completeTask(id)} className="todo">
        <li className={`${completed ? "completed" : ""}`} >{title}</li>
      </div>
    )
}

export default Todo;