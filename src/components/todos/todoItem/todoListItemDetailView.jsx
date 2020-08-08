import React from 'react';

import StepListContainer from '../../stepList/stepListContainer';

const TodoListItemDetailView = (props) => {
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
      <h4><small>Sub-Tasks</small></h4>
      <StepListContainer todoId={todo.id} />
    </div>
  );
};

export default TodoListItemDetailView;
