import React from 'react'

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  handleSubmit = event => {

    event.preventDefault()

    this.props.addTask(this.state.inputValue)

    this.setState({
      inputValue: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleChange} placeholder='Add New Task' />
          <button>Add To Do</button>
        </form>
      </>
    )
  }
}

export default TodoForm;

