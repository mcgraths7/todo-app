import React from 'react';

import TodoListItemContainer from '../todoListItem/todoListItemContainer';
import TodoForm from './todoForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
    };
  }

  componentDidMount() {
    const { fetchTodos, fetchSteps } = this.props;
    fetchTodos()
      .then(() => {
        fetchSteps();
      })
      .then(() => this.setState({
        dataFetched: true,
      }));
  }

  render() {
    const {
      todos,
      steps,
      stepsByTodoId,
      createTodo,
      destroyTodo,
    } = this.props;
    const { dataFetched } = this.state;
    if (dataFetched) {
      return (
        <div>
          <TodoForm createTodo={createTodo} />
          {
            todos.map((todo) => (
              <TodoListItemContainer
                todo={todo}
                key={todo.id}
                steps={stepsByTodoId(steps, todo.id)}
                destroyTodo={destroyTodo}
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
        />
        <ul>
          <li>Loading todos...</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
