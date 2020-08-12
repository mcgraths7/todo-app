export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos',
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: { todo },
  })
);

export const showTodo = (todo) => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todo.id}`,
  })
);

export const updateTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: { todo },
  })
);

export const destroyTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`,
    data: { todo },
  })
);
