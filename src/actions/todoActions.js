export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS"
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  }
}

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export const toggleTodo = todo => {
  return {
    type: TOGGLE_TODO,
    todo
  }
}

export const removeTodo = todo => {
  return {
    type: REMOVE_TODO,
    todo
  }
}
