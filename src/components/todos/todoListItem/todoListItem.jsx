import React from 'react';

import TodoListItemDetailView from './todoListItemDetailView';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
      currentTagName: '',
    };
    this.destroyTodo = this.destroyTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.updateTagName = this.updateTagName.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addTagOnReturn = this.addTagOnReturn.bind(this);
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

  updateTagName(e) {
    this.setState({
      currentTagName: e.currentTarget.value,
    });
  }

  addTag(e) {
    e.preventDefault();
    const { todo, updateTodo } = this.props;
    const { currentTagName } = this.state;
    const newTodo = { ...todo };
    newTodo.tags = [...newTodo.tags, { name: currentTagName }];
    updateTodo(newTodo);
  }

  addTagOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTag();
    }
  }

  render() {
    const { todo, steps } = this.props;
    const { detail, currentTagName } = this.state;
    const { tags, title } = todo;
    const tagNames = tags ? tags.map((tag) => tag.name) : [];
    return (
      <li>
        <h3>{title}</h3>
        <small>{tagNames.join(' | ')}</small>
        <form>
          <label htmlFor="todoTags">
            Add Tag
            <input type="text" name="todoTags" onChange={this.updateTagName} onKeyDown={this.addTagOnReturn} value={currentTagName} />
            <button type="button" onClick={this.addTag}>Add Tag!</button>
          </label>
        </form>
        {detail ? <TodoListItemDetailView todo={todo} steps={steps} /> : ''}
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
