import React from 'react';

const TodoListItemDetailView = props => {
  return (
    <div>
      <p>{props.todo.body}</p>
      <p><small>{props.todo.completeBy} | {props.todo.isDone ? "complete" : "incomplete"}</small></p>
    </div>
  );
}

export default TodoListItemDetailView;