import React from 'react';

import TodoListItemDetailView from './todoListItemDetailView';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleTodo(e) {
    const { todo, toggleTodo } = this.props;
    e.preventDefault();
    toggleTodo(todo);
  }

  removeTodo(e) {
    const { todo, removeTodo } = this.props;
    e.preventDefault();
    removeTodo(todo);
  }

  toggleDetail(e) {
    e.preventDefault();
    const { detail } = this.state;
    this.setState({
      detail: !detail,
    });
  }

  render() {
    const { todo } = this.props;
    const { detail } = this.state;
    return (
      <li>
        <h3>{todo.title}</h3>
        {detail ? <TodoListItemDetailView todo={todo} /> : ''}
        <p>
          <span>
            <button type="button" onClick={this.toggleDetail}>Show/Hide Details</button>
            <button type="button" onClick={this.toggleTodo}>{todo.isDone ? 'Undo' : 'Done'}</button>
            <button type="button" onClick={this.removeTodo}>Remove</button>
          </span>
        </p>
      </li>
    );
  }
}

export default TodoListItem;
