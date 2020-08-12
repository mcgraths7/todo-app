import React from 'react';

// import ErrorsList from './errorsList';
import TagList from './tagList';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      tagName: '',
      tagNames: [],
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.resetTodoDetails = this.resetTodoDetails.bind(this);
    this.addTodoOnReturn = this.addTodoOnReturn.bind(this);
    this.updateTagName = this.updateTagName.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addTagOnReturn = this.addTagOnReturn.bind(this);
    this.resetTagName = this.resetTagName.bind(this);
  }

  resetTodoDetails() {
    this.setState({
      title: '',
      body: '',
      tagNames: [],
    });
  }

  resetTagName() {
    this.setState({
      tagName: '',
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

  updateTagName(e) {
    this.setState({
      tagName: e.currentTarget.value,
    });
  }

  addTag(e) {
    e.preventDefault();
    const { tagName, tagNames } = this.state;
    this.setState(() => {
      const newState = {
        tagNames: [...tagNames, tagName],
      };
      return newState;
    });
    this.resetTagName();
  }

  addTodo(e) {
    e.preventDefault();
    const { title, body, tagNames } = this.state;
    const { createTodo } = this.props;
    const todo = {
      title,
      body,
      isDone: false,
      tag_names: tagNames,
    };
    createTodo(todo).then(() => (
      this.resetTodoDetails()
    ));
  }

  addTodoOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTodo(e);
    }
  }

  addTagOnReturn(e) {
    if (e.keyCode === 13) {
      this.addTag();
    }
  }

  render() {
    const {
      title,
      body,
      tagName,
      tagNames,
    } = this.state;
    // const { errors } = this.props;
    return (
      <div>

        <form>
          {/* <ErrorsList errors={errors} /> */}
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

          <label htmlFor="todoTags">
            Add Tags
            <input type="text" name="todoTags" onChange={this.updateTagName} onKeyDown={this.addTagOnReturn} value={tagName} />
            <button type="button" onClick={this.addTag}>Add Tag!</button>
          </label>
          <TagList tagNames={tagNames} />

          <button type="button" onClick={this.addTodo}>Add Todo!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
