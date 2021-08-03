import React from 'react';
import './components/Todo.css'
import Todo from './components/Todo.js'
import TodoForm from "./components/TodoForm";

const todos = [
  {
    title: 'Take out trash',
    id: 1,
    completed: false
  },
  {
    title: 'Wash Dishes',
    id: 2,
    completed: false
  },
  {
    title: "Clean room",
    id: 3,
    completed: false
  },
  {
    title: 'Water plants',
    id: 4,
    completed: false
  },
  {
    title: "Pickup food for later",
    id: 5,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  completeTask = () => {
    // console.log("completed task")
    const task = document.querySelector('li');
    task.style.textDecoration = 'line-through';
    task.style.color = 'grey';
  }

  addTask = taskName => {

    const newTask = {
      title: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  render() {
    return (
      <div>

        <h1>Welcome to Your To Do App!</h1>

        <TodoForm addTask={this.addTask} />

        {this.state.todos.map(todo => {
          return (
            <Todo deleteTask={this.deleteTask} completeTask={this.completeTask} key={todo.id} title={todo.title}/>
          )
        })}

        <button id='clear-button'>clear completed tasks</button>
      </div>
    );
  }
}

export default App;
