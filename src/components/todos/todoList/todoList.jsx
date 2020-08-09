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
      destroyTodo,
      fetchSteps,
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
                destroyTodo={destroyTodo}
                fetchSteps={fetchSteps}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
