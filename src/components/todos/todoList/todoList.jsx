import React from 'react';

import TodoListItem from '../todoItem/todoListItem';
import TodoForm from './todoForm';

class TodoList extends React.Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const {
      createTodo,
      removeTodo,
      toggleTodo,
      todos,
    } = this.props;
    return (
      <div>
        <TodoForm createTodo={createTodo} />
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
  }
}

export default TodoList;
