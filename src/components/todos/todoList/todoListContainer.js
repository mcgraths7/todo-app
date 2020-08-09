import { connect } from 'react-redux';

import TodoList from './todoList';
import {
  fetchTodos,
  createTodo,
  destroyTodo,
} from '../../../actions/todoActions';
import {
  receiveErrors,
  clearErrors,
} from '../../../actions/errorActions';
import { allTodos } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
