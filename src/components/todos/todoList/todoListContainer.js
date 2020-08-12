import { connect } from 'react-redux';

import TodoList from './todoList';
import { allTodos } from '../../../reducers/selectors';
import { addTodo, deleteTodo, fetchTodos } from '../../../reducers/todoSlice';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
