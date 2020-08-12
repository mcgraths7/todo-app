import React from 'react';

import TodoListItem from '../todoListItem/todoListItem';
import TodoForm from './todoForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
    };
  }

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos()
      .then(() => this.setState({
        dataFetched: true,
      }));
  }

  render() {
    const {
      createTodo,
      errors,
      todos,
    } = this.props;
    const { dataFetched } = this.state;
    if (dataFetched) {
      return (
        <div>
          <TodoForm createTodo={createTodo} />
          {
            todos.map((todo) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
              />
            ))
          }
        </div>
      );
    }
    return (
      <div>
        <TodoForm
          createTodo={createTodo}
          errors={errors}
        />
        <ul>
          <li>Loading todos...</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
