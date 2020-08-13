import { createSlice } from '@reduxjs/toolkit';

import * as TodoAPIUtils from '../util/todoApiUtil';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    byId: {},
    allIds: [],
  },
  reducers: {
    addTodos: (state, action) => {
      const { payload } = action;
      payload.map((todo) => {
        const tagNames = todo.tags.map((tag) => tag.name);
        const newTodo = {
          id: todo.id,
          title: todo.title,
          body: todo.body,
          isDone: todo.isDone,
          tagNames,
        };
        state.byId[newTodo.id] = newTodo;
        const idx = state.allIds.indexOf(newTodo.id);
        if (idx === -1) {
          state.allIds.push(newTodo.id);
        }
        return state;
      });
    },
    addTodo: (state, action) => {
      const { payload } = action;
      const tagNames = payload.tags.map((tag) => tag.name);
      const newTodo = {
        id: payload.id,
        title: payload.title,
        body: payload.body,
        isDone: payload.isDone,
        tagNames,
      };
      state.byId[newTodo.id] = newTodo;
      const idx = state.allIds.indexOf(newTodo.id);
      if (idx === -1) {
        state.allIds.push(newTodo.id);
      }
    },
    updateTodo: (state, action) => {
      const { payload } = action;
      const tagNames = payload.tags.map((tag) => tag.name);
      const newTodo = {
        id: payload.id,
        title: payload.title,
        body: payload.body,
        isDone: payload.isDone,
        tagNames,
      };
      state.byId[newTodo.id] = newTodo;
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      delete state.byId[payload.id];
      const idx = state.allIds.indexOf(payload.id);
      if (idx > -1) {
        state.allIds.splice(idx, 1);
      }
    },
  },
});

export const {
  addTodo,
  addTodos,
  deleteTodo,
  updateTodo,
} = todoSlice.actions;

export const asyncFetchTodos = () => (dispatch) => (
  TodoAPIUtils.fetchTodos().then((todos) => dispatch(addTodos(todos)))
);

export const asyncCreateTodo = (todo) => (dispatch) => (
  TodoAPIUtils.createTodo(todo).then((todo) => dispatch(addTodo(todo)))
);

export const asyncUpdateTodo = (todo) => (dispatch) => (
  TodoAPIUtils.updateTodo(todo).then((todo) => dispatch(updateTodo(todo)))
);

export const asyncDestroyTodo = (todo) => (dispatch) => (
  TodoAPIUtils.destroyTodo(todo).then((todo) => dispatch(deleteTodo(todo)))
);

export default todoSlice.reducer;
