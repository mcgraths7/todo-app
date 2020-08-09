import {
  RECEIVE_TODO,
  REMOVE_TODO,
  RECEIVE_TODOS,
} from '../actions/todoActions';

const todoReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  const newState = { ...previousState };
  let todoItem;
  let todoItems;
  if (action.todo) {
    todoItem = { ...action.todo };
  }
  if (action.todos) {
    todoItems = [...action.todos];
  }

  switch (action.type) {
    case RECEIVE_TODO:
      newState[todoItem.id] = todoItem;
      return { ...newState };
    case RECEIVE_TODOS:
      todoItems.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case REMOVE_TODO:
      delete newState[todoItem.id];
      return { ...newState };
    default:
      return previousState;
  }
};

export default todoReducer;
