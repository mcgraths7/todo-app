import React from 'react';

import TodoListItem from '../todoItem/todoListItem';
import TodoForm from './todoForm'

const TodoList = ( props ) => {
  return (
    <div>
      <TodoForm receiveTodo={props.receiveTodo} />
      <ul>
        {
          props.todos.map(todo => <TodoListItem todo={todo} key={todo.id} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo} />)
        }
      </ul>
    </div>
  )
}

export default TodoList;