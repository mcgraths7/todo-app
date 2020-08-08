import React from 'react';

import StepListContainer from '../../stepList/stepListContainer';

const TodoListItemDetailView = (props) => {
  const toggleComplete = (e) => {
    e.preventDefault();
    const { receiveTodo, todo } = props;
    todo.isDone = !todo.isDone;
    receiveTodo(todo);
  };

  const { todo } = props;
  return (
    <div>
      <p>{todo.body}</p>
      <p>
        <small>
          {todo.completeBy}
          {'\u00A0'}
          |
          {'\u00A0'}
          {todo.isDone ? ' Complete' : ' Incomplete'}
        </small>
      </p>
      <button type="button" onClick={toggleComplete}>{todo.isDone ? 'Undo' : 'Done'}</button>
      <h4><small>Sub-Tasks</small></h4>
      <StepListContainer todoId={todo.id} key={todo.id} />
    </div>
  );
};

export default TodoListItemDetailView;
