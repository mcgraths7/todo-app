import React from 'react';

import StepListContainer from '../../stepList/stepListContainer';

class TodoListItemDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete(e) {
    e.preventDefault();
    const { updateTodo } = this.props;
    let { todo } = this.props;
    todo = {
      id: todo.id,
      title: todo.title,
      body: todo.body,
      isDone: !todo.isDone,
    };
    updateTodo(todo);
  }

  render() {
    const { todo, steps } = this.props;
    return (
      <div>
        <p>{todo.body}</p>
        <p>
          <small>{todo.isDone ? ' Complete' : ' Incomplete'}</small>
        </p>
        <button type="button" onClick={this.toggleComplete}>{todo.isDone ? 'Undo' : 'Done'}</button>
        <h4><small>Sub-Tasks</small></h4>
        <StepListContainer todo={todo} key={todo} steps={steps} />
      </div>
    );
  }
}

export default TodoListItemDetailView;
