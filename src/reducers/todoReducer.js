import { RECEIVE_TODO, RECEIVE_TODOS, TOGGLE_TODO, REMOVE_TODO } from '../actions/todoActions';

const today = new Date();
const _initialState = {
  todos: {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      completeBy: today.toLocaleDateString(),
      isDone: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      completeBy: today.toLocaleDateString(),
      isDone: true
    }
  }
};

const todoReducer = (previousState = _initialState.todos, action) => {
  Object.freeze(previousState)
  let newState = Object.assign({}, previousState);

  const todoItem = action.todo;
  let todoHash = {};

  switch (action.type) {
    case RECEIVE_TODO:
      todoHash[todoItem["id"]] = todoItem;
      return Object.assign({}, newState, todoHash);
    case RECEIVE_TODOS:
      let todosHash = {};
      action.todos.map((todo) => todosHash[todo.id] = todo);
      return Object.assign(newState, todosHash);
    case TOGGLE_TODO:
      todoItem.isDone = !todoItem.isDone;
      todoHash[todoItem.id] = todoItem;
      return Object.assign({}, newState, todoHash);
    case REMOVE_TODO:
      delete newState[todoItem.id]
      return newState;
    default:
      return previousState;
  }
}

export default todoReducer;