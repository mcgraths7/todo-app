import React from 'react';

import generateUniqueId from '../../util/generateUniqueId'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      completeBy: "",
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateCompleteBy = this.updateCompleteBy.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      title: "",
      body: "",
      completeBy: ""
    })
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  updateCompleteBy(e) {
    this.setState({
      completeBy: e.currentTarget.value
    });
  }

  addTodo(e) {
    const {title, body, completeBy } = this.state;
    e.preventDefault();
    const todoHash = {
      id: generateUniqueId(),
      title,
      body,
      completeBy,
      isDone: false
    };
    this.props.receiveTodo(todoHash);
    this.resetState();
  }

  render() {
    let { title, body, completeBy } = this.state;
    return (
      <form>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" name="todoTitle" onChange={this.updateTitle} value={title}/>
        <br/>
        <label htmlFor="todoBody">Body</label>
        <input type="text" name="todoBody" onChange={this.updateBody} value={body}/>
        <br/>
        <label htmlFor="todoCompleteBy">Complete By</label>
        <input type="date" name="todoCompleteBy" onChange={this.updateCompleteBy} value={completeBy}/>
        <br/>
        <button onClick={this.addTodo}>Add Todo!</button>
      </form>
    )
  }
}

export default TodoForm;