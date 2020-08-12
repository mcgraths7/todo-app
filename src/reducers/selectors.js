export const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos.byId);
  return todoKeys.map((todoKey) => state.todos.byId[todoKey]);
};

export const todoById = (todos, id) => {
  const idx = todos.indexOf(id);
  return todos[idx];
};

export const allSteps = (state) => {
  const stepKeys = Object.keys(state.steps.byId);
  return stepKeys.map((stepKey) => state.steps.byId[stepKey]);
};

export const stepsByTodoId = (steps, todoId) => (
  steps.filter((step) => step.todo.id === todoId)
);
