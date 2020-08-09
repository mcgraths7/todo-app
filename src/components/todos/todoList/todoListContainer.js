import { connect } from 'react-redux';

import TodoList from './todoList';
import {
  receiveTodo,
  receiveTodos,
  toggleTodo,
  removeTodo,
  fetchTodos,
  createTodo,
  destroyTodo,
} from '../../../actions/todoActions';
import { allTodos } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo)),
});
// const mapDispatchToProps = (dispatch) => ({
//   receiveTodo: (todo) => dispatch(receiveTodo(todo)),
//   receiveTodos: (todos) => dispatch(receiveTodos(todos)),
//   toggleTodo: (todo) => dispatch(toggleTodo(todo)),
//   removeTodo: (todo) => dispatch(removeTodo(todo)),
//   fetchTodos: () => dispatch(fetchTodos()),
//   createTodo: (todo) => dispatch(createTodo(todo)),
//   destroyTodo: (todo) => dispatch(destroyTodo(todo)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
