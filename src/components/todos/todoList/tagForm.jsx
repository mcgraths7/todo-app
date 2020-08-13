import React from 'react';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTagName: '',
    };
  }

  updateTagName(e) {
    this.setState({
      tagName: e.currentTarget.value,
    });
  }

  addTag(e) {
    e.preventDefault();
    const { todo, updateTodo } = this.props;
    const { currentTagName } = this.state;
    const newTags = todo.tags.map((tag) => ({
      name: tag.name,
    }));
    newTags.push({ name: currentTagName });
    const updatedTodo = {
      ...todo,
      tags: newTags,
    };
    // updateTodo(todo)
  }

  render() {
    const { tagName } = this.state;

    return (
      <form>
        <label htmlFor="todoTags">
          Add Tags
          <input type="text" name="todoTags" onChange={this.updateTagName} onKeyDown={this.addTagOnReturn} value={tagName} />
          <button type="button" onClick={this.addTag}>Add Tag!</button>
        </label>
      </form>
    );
  }
}

export default TagForm;
