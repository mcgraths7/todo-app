import React from 'react';

import TodoListItem from '../todoItem/todoListItem';
import TodoForm from './todoForm';

const TodoList = (props) => {
  const {
    receiveTodo, removeTodo, toggleTodo, todos,
  } = props;
  return (
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
};

export default TodoList;
