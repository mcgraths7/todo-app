import {
  RECEIVE_TODO,
  REMOVE_TODO,
  RECEIVE_TODOS,
} from '../actions/todoActions';

const todoReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  const newState = Object.assign({}, previousState);
  const { todo, todos, type } = action;
  let todoItem;
  let todoItems;
  if (todo) {
    todoItem = Object.assign({}, action.todo);
  }
  if (todos) {
    todoItems = [...action.todos];
  }
  switch (type) {
    case RECEIVE_TODO:
      newState[todoItem.id] = todoItem;
      return newState;
    case RECEIVE_TODOS:
      todoItems.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case REMOVE_TODO:
      delete newState[todoItem.id];
      return newState;
    default:
      return previousState;
  }
};

export default todoReducer;
