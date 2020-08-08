import React from 'react';

import TodoListItem from './todoItem/todoListItem';
import TodoForm from './todoList/todoForm';

const TodoList = ({
  todos, receiveTodo, removeTodo, toggleTodo,
}) => (
  <div>
    <TodoForm receiveTodo={receiveTodo} />
    <ul>
      {
      todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))
      }
    </ul>
  </div>
);

export default TodoList;
