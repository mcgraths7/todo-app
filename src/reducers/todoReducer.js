import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
} from '../actions/todoActions';

const today = new Date();
const initialState = {
  todos: {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      completeBy: today.toLocaleDateString(),
      isDone: false,
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      completeBy: today.toLocaleDateString(),
      isDone: true,
    },
  },
};

const todoReducer = (previousState = initialState.todos, action) => {
  Object.freeze(previousState);
  const newState = { ...previousState };

  const todoItem = action.todo;
  const todoHash = {};
  const todosHash = {};

  switch (action.type) {
    case RECEIVE_TODO:
      todoHash[todoItem.id] = todoItem;
      return { ...previousState, todoHash };
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return Object.assign(newState, todosHash);
    case TOGGLE_TODO:
      todoItem.isDone = !todoItem.isDone;
      todoHash[todoItem.id] = todoItem;
      return { ...newState, todoHash };
    case REMOVE_TODO:
      delete newState[todoItem.id];
      return newState;
    default:
      return previousState;
  }
};

export default todoReducer;
