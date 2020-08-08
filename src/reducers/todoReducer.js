import {
  RECEIVE_TODO,
  REMOVE_TODO,
} from '../actions/todoActions';

const todoReducer = (previousState = {}, action) => {
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
