import React from 'react';

import ErrorsList from './errorsList';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.resetState = this.resetState.bind(this);
    this.addTodoOnReturn = this.addTodoOnReturn.bind(this);
  }

  resetState() {
    this.setState({
      title: '',
      body: '',
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

  addTodo(e) {
    const { title, body } = this.state;
    const { createTodo } = this.props;
    e.preventDefault();
    const todo = {
      title,
      body,
      isDone: false,
    };
    createTodo(todo).then(() => (
      this.resetState()
    ));
  }

  addTodoOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTodo(e);
    }
  }

  render() {
    const { title, body } = this.state;
    const { errors } = this.props;
    return (
      <form>
        <ErrorsList errors={errors} />
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

        <button type="button" onClick={this.addTodo}>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
