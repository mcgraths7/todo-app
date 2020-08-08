export const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos);
  return todoKeys.map((key) => state.todos[key]);
};

export const allSteps = (state) => {
  const stepKeys = Object.keys(state.steps);
  return stepKeys.map((key) => state.steps[key]);
};

export const stepsByTodoId = (steps, todoId) => (
  steps.filter((step) => (
    steps[step.id - 1].todoId === todoId
  ))
);
