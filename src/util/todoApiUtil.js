export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos',
  })
);

export const createTodo = (todo) => {
  const distinctTagNames = [...new Set(todo.tagNames)];
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo: {
        id: todo.id,
        title: todo.title,
        body: todo.body,
        isDone: todo.isDone,
        tag_names: distinctTagNames,
      },
    },
  });
};

export const showTodo = (todo) => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todo.id}`,
  })
);

export const updateTodo = (todo) => {
  const distinctTagNames = [...new Set(todo.tagNames)];
  return $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: {
      todo: {
        id: todo.id,
        title: todo.title,
        body: todo.body,
        isDone: todo.isDone,
        tag_names: distinctTagNames,
      },
    },
  });
};

export const destroyTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`,
    data: { todo },
  })
);
