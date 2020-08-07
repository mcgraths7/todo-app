export const allTodos = state => {
  const todoKeys = Object.keys(state.todos);
  return todoKeys.map(key => state.todos[key]);
}

export const allSteps = state => {
  const stepKeys = Object.keys(state.steps);
  return stepKeys.map(key => state.steps[key])
}

export const stepsByTodoId = (state, todoId) => {
  let allStepsArr = [...allSteps(state)];
  return allStepsArr.filter(step => {
    return state.steps[step.id].todoId == todoId
  });
}