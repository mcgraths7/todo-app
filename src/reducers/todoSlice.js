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
        state.byId[todo.id] = todo;
        const idx = state.allIds.indexOf(todo.id);
        if (idx === -1) {
          state.allIds.push(todo.id);
        }
        return state;
      });
    },
    addTodo: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
      const idx = state.allIds.indexOf(payload.id);
      if (idx === -1) {
        state.allIds.push(payload.id);
      }
    },
    updateTodo: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
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
