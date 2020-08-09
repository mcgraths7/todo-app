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
      toggleTodo,
      destroyTodo,
      errors,
      todos,
    } = this.props;
    return (
      <div>
        <TodoForm
          createTodo={createTodo}
          errors={errors}
        />
        <ul>
          {
            todos.map((todo) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
