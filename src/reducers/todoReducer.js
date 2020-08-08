import {
  RECEIVE_TODO,
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

  const todoItem = { ...action.todo };

  switch (action.type) {
    case RECEIVE_TODO:
      newState[todoItem.id] = todoItem;
      return { ...newState };
    case REMOVE_TODO:
      delete newState[todoItem.id];
      return { ...newState };
    default:
      return previousState;
  }
};

export default todoReducer;
