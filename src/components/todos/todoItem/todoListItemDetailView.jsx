import React from 'react';

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
      <ul>
        {/* Add steps here */}
      </ul>
    </div>
  );
};

export default TodoListItemDetailView;
