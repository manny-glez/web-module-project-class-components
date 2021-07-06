import React from 'react';

const Todo = props => {

  // If task is NOT completed --> no line-through CSS rule
  // If task IS completed --> apply line-through CSS rule
  
  const { toggleTask, taskName, taskID, status } = props;

  return (
    // <div onClick={handleClick} >wash dishes</div>
    <>
      <li className={`${status ? 'completed' : ''}`} onClick={() => toggleTask(taskID)}>{taskName}</li>
    </>
  )
}

export default Todo;