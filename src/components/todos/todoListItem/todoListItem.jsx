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
    this.clearTagName = this.clearTagName.bind(this);
    this.removeTag = this.removeTag.bind(this);
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

  clearTagName() {
    this.setState({
      currentTagName: '',
    });
  }

  removeTag(e) {
    e.preventDefault();
    const { todo, updateTodo } = this.props;
    const targetTag = e.currentTarget.value;
    const index = todo.tagNames.indexOf(targetTag);
    const newTagNames = [...todo.tagNames];
    newTagNames.splice(index, 1);
    const newTodo = {
      ...todo,
      tagNames: newTagNames,
    };
    updateTodo(newTodo);
  }

  addTag(e) {
    e.preventDefault();
    const { todo, updateTodo } = this.props;
    const { currentTagName } = this.state;
    const newTodo = { ...todo };
    newTodo.tagNames = [...newTodo.tagNames, currentTagName];
    updateTodo(newTodo)
      .then(() => {
        this.clearTagName();
      });
  }

  addTagOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTag();
    }
  }

  render() {
    const { todo, steps, updateTodo } = this.props;
    const { detail, currentTagName } = this.state;
    const { tagNames, title } = todo;
    const TagNames = () => (
      tagNames.map((tagName) => <button key={tagName} type="button" onClick={this.removeTag} value={tagName}>{tagName}</button>)
    );
    return (
      <li>
        <h3>{title}</h3>
        <TagNames />
        <form>
          <label htmlFor="todoTags">
            <input type="text" name="todoTags" onChange={this.updateTagName} onKeyDown={this.addTagOnReturn} value={currentTagName} />
            <button type="button" onClick={this.addTag}>Add Tag!</button>
          </label>
        </form>
        {detail ? <TodoListItemDetailView todo={todo} steps={steps} updateTodo={updateTodo} /> : ''}
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
