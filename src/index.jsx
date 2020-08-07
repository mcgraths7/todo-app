import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'

import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todoActions';
import { receiveStep } from './actions/stepActions';
import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.configureStore = configureStore;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.receiveStep = receiveStep;
  ReactDOM.render(<Root store={configureStore()} />, root)
})