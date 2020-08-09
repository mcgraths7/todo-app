import React from 'react';

import StepListContainer from '../../stepList/stepListContainer';

const TodoListItemDetailView = (props) => {
  const toggleComplete = (e) => {
    e.preventDefault();
    const { updateTodo } = props;
    let { todo } = props;
    todo.isDone = !todo.isDone;
    todo = {
      id: todo.id,
      title: todo.title,
      body: todo.body,
      isDone: todo.isDone,
    };
    updateTodo(todo);
  };

  const { todo } = props;
  return (
    <div>
      <p>{todo.body}</p>
      <p>
        <small>{todo.isDone ? ' Complete' : ' Incomplete'}</small>
      </p>
      <button type="button" onClick={toggleComplete}>{todo.isDone ? 'Undo' : 'Done'}</button>
      <h4><small>Sub-Tasks</small></h4>
      <StepListContainer todoId={todo.id} key={todo.id} />
    </div>
  );
};

export default TodoListItemDetailView;
