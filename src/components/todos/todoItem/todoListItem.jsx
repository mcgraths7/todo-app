import React from 'react';

import TodoListItemDetailView from './todoListItemDetailView';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }
  toggleTodo(e) {
    e.preventDefault()
    this.props.toggleTodo(this.props.todo)
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  toggleDetail(e) {
    e.preventDefault();
    let detail = this.state.detail;
    this.setState({
      detail: !detail
    });
  }
  
  render() {
    const { todo } = this.props;
    return (
      <li>
        <h4 onClick={this.toggleDetail}>
          {todo.title}
        </h4>
        {this.state.detail ? <TodoListItemDetailView todo={todo} /> : ""}
        <p>
          <span>
            <button onClick={this.toggleTodo}>{todo.isDone ? "Undo" : "Done"}</button>
            <button onClick={this.removeTodo}>Remove</button>
          </span>
        </p>
      </li>
    )
  }
}

export default TodoListItem