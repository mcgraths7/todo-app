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

  logProps() {
    console.log(this.props);
  }

  componentDidMount() {
    const { fetchSteps, todo } = this.props;
    fetchSteps(todo);
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
    return (
      <li>
        <h3>{todo.title}</h3>
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
