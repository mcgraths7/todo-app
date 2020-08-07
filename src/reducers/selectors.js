
export const allTodos = state => {
  const todo_keys = Object.keys(state.todos)
  return todo_keys.map(key => state.todos[key])
}