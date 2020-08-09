export const fetchSteps = (todo) => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo.id}/steps`,
  })
);

export const createStep = (todo, step) => (
  $.ajax({
    method: 'POST',
    url: `api/todos/${todo.id}/steps`,
    data: {
      step,
    },
  })
);

export const destroyStep = (todo, step) => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}/steps/${step.id}`,
  })
);
