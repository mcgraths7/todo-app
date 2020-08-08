import React from 'react';

import generateUniqueId from '../../../util/generateUniqueId';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      completeBy: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateCompleteBy = this.updateCompleteBy.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.resetState = this.resetState.bind(this);
    this.addTodoOnReturn = this.addTodoOnReturn.bind(this);
  }

  resetState() {
    this.setState({
      title: '',
      body: '',
      completeBy: '',
    });
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value,
    });
  }

  updateCompleteBy(e) {
    this.setState({
      completeBy: e.currentTarget.value,
    });
  }

  addTodo(e) {
    const { title, body, completeBy } = this.state;
    const { receiveTodo } = this.props;
    e.preventDefault();
    const todoHash = {
      id: generateUniqueId(),
      title,
      body,
      completeBy,
      isDone: false,
    };
    receiveTodo(todoHash);
    this.resetState();
  }

  addTodoOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTodo(e);
    }
  }

  render() {
    const { title, body, completeBy } = this.state;
    return (
      <form>
        <label htmlFor="todoTitle">
          Title
          <input type="text" name="todoTitle" onChange={this.updateTitle} onKeyDown={this.addTodoOnReturn} value={title} />
        </label>

        <br />

        <label htmlFor="todoBody">
          Body
          <input type="text" name="todoBody" onChange={this.updateBody} onKeyDown={this.addTodoOnReturn} value={body} />
        </label>

        <br />

        <label htmlFor="todoCompleteBy">
          Complete By
          <input type="date" name="todoCompleteBy" onChange={this.updateCompleteBy} onKeyDown={this.addTodoOnReturn} value={completeBy} />
        </label>

        <br />

        <button type="button" onClick={this.addTodo}>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
