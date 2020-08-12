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
    const { todo, updateTodo } = this.props;
    e.preventDefault();
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
