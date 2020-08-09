import React from 'react';

import TodoListItem from './todoItem/todoListItem';
import TodoForm from './todoList/todoForm';

const TodoList = (props) => {
  const {
    todos,
    toggleTodo,
    destroyTodo,
    fetchTodos,
  } = props;
  return (
    <div>
      <TodoForm fetchTodos={fetchTodos} />
      <ul>
        {
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            destroyTodo={destroyTodo}
          />
        ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
