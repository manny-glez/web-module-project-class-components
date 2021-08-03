import React from 'react';

const Todo = props => {
  const { title, completeTask } = props;

  const handleClick = () => {
  console.log(title)
  completeTask()
}

    return (
      <div id='todoId' onClick={handleClick} className="todo">
        <li>{title}</li>
      </div>
    )
}

export default Todo;