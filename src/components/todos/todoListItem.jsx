import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  toggleTodo(e) {
    e.preventDefault();
    this.props.toggleTodo(this.props.todo);
  }
  render() {
    const { todo } = this.props
    return (
    <li>
      <h4>{todo.title}</h4>
      <p>{todo.body}</p>
      <p><small>{todo.completeBy}</small></p>
      <p><small>{todo.isDone ? "complete" : "incomplete"}</small></p>
      <button onClick={this.removeTodo}>Delete</button>
      <button onClick={this.toggleTodo}>{todo.isDone ? "Undo" : "Done"}</button>
    </li>
    ) 
  }
}
export default TodoListItem