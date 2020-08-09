export const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos);
  return todoKeys.map((key) => state.todos[key]);
};

export const todoById = (todos, id) => (
  todos.filter((todo) => (
    todo.id === id
  ))
);

export const allSteps = (state) => {
  const stepKeys = Object.keys(state.steps);
  return stepKeys.map((key) => state.steps[key]);
};

export const stepsByTodoId = (steps, todoId) => (
  steps.filter((_, idx) => (
    steps[idx].todoId === todoId
  ))
);
