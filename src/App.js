import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo.js"
import "./components/Todo.css"

const tasks = [
  {
    name: 'Wash Dishes',
    id: 1465,
    completed: false
  },
  {
    name: 'Clean Room',
    id: 3456,
    completed: false
  },
  {
    name: 'Water Plants',
    id: 6785,
    completed: false
  },
  {
    name: 'Do Homework',
    id: 5432,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  }

  toggleTask = id => {  
    // change completed property to its opposite boolean value
    // if completed was true --> false
    // if completed was false --> true
    this.setState({
      ...this.state.tasks,
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return ({
            ...task,
            completed: !task.completed
          })
        } else {
          return task
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return task.completed === false
      })
    })
  }

  render() {
    return (
      <div className='app'>

        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          {/* <TodoForm /> */}
        </div>

        <div id="task-list">
          {
            this.state.tasks.map(task => {
              return (
              <Todo
                toggleTask={this.toggleTask}
                key={task.id}
                taskName={task.name}
                taskID={task.id}
                status={task.completed}
              />
              )
            })
          }

          <button onClick={this.clearCompleted}>Clear</button>

        </div>
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
