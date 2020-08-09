import * as TodoAPIUtil from '../util/todoApiUtil';
import { receiveErrors, clearErrors } from './errorActions';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Synchronous Actions
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
});

// Asynchronous actions
export const fetchTodos = () => (dispatch) => (
  TodoAPIUtil.fetchTodos().then((todos) => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => (dispatch) => (
  TodoAPIUtil.createTodo(todo)
    .then((todo) => {
      dispatch(receiveTodo(todo));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON)))
);

export const destroyTodo = (todo) => (dispatch) => (
  TodoAPIUtil.destroyTodo(todo)
    .then((todo) => dispatch(removeTodo(todo)))
);

export const updateTodo = (todo) => (dispatch) => (
  TodoAPIUtil.updateTodo(todo)
    .then((todo) => {
      dispatch(receiveTodo(todo));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON)))
);
