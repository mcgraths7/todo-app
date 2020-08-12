import React from 'react';

import TodoListItemDetailViewContainer from './todoListItemDetailViewContainer';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    this.destroyTodo = this.destroyTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  destroyTodo(e) {
    e.preventDefault();
    const { todo, destroyTodo } = this.props;
    destroyTodo(todo);
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
    const { tags, title } = todo;
    const tagNames = tags ? tags.map((tag) => tag.name) : [];
    return (
      <li>
        <h3>{title}</h3>
        <small>{tagNames.join(' | ')}</small>
        {detail ? <TodoListItemDetailViewContainer todo={todo} /> : ''}
        <p>
          <span>
            <button type="button" onClick={this.toggleDetail}>Show/Hide Details</button>
            <button type="button" onClick={this.destroyTodo}>Remove</button>
          </span>
        </p>
      </li>
    );
  }
}

export default TodoListItem;
