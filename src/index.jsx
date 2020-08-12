import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import store from './store/store';

import {
  addTodo,
  addTodos,
  deleteTodo,
  updateTodo,
  fetchTodos,
} from './reducers/todoSlice';

import {
  addStep,
  addSteps,
  deleteStep,
  updateStep,
} from './reducers/stepSlice';

import {
  allTodos,
  todoById,
  allSteps,
  stepsByTodoId,
} from './reducers/selectors';

// import { fetchTodos } from './util/todoApiUtil';
import { fetchSteps } from './util/stepAPIUtil';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  window.store = store;
  window.addTodo = addTodo;
  window.addTodos = addTodos;
  window.deleteTodo = deleteTodo;
  window.updateTodo = updateTodo;
  window.allTodos = allTodos;
  window.todoById = todoById;
  window.allSteps = allSteps;
  window.stepsByTodoId = stepsByTodoId;
  window.fetchTodos = fetchTodos;
  window.fetchSteps = fetchSteps;
  window.addStep = addStep;
  window.addSteps = addSteps;
  window.updateStep = updateStep;
  window.deleteStep = deleteStep;
  ReactDOM.render(<Root store={store} />, content);
});
