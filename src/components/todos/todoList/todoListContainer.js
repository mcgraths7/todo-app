import { connect } from 'react-redux';

import TodoList from './todoList';
import { allTodos, allSteps, stepsByTodoId } from '../../../reducers/selectors';
import {
  asyncFetchTodos,
  asyncCreateTodo,
  asyncUpdateTodo,
  asyncDestroyTodo,
} from '../../../reducers/todoSlice';
import { asyncFetchSteps } from '../../../reducers/stepSlice';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  steps: allSteps(state),
  stepsByTodoId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(asyncFetchTodos()),
  createTodo: (todo) => dispatch(asyncCreateTodo(todo)),
  updateTodo: (todo) => dispatch(asyncUpdateTodo(todo)),
  destroyTodo: (todo) => dispatch(asyncDestroyTodo(todo)),
  fetchSteps: () => dispatch(asyncFetchSteps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
