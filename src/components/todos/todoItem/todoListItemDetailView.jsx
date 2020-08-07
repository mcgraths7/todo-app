import React from 'react';

import StepList from '../../stepList/stepList';

const TodoListItemDetailView = (props) => {
  const { todo, receiveSteps } = props;
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
      <StepList steps={receiveSteps} />
    </div>
  );
};

export default TodoListItemDetailView;
